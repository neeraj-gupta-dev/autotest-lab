const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import DB Models
const User = require('./models/User');
const Product = require('./models/Product');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        console.log('Clearing old database records...');
        // Clear out the database first so we don't duplicate on multiple runs
        await User.deleteMany();
        await Product.deleteMany();

        console.log('Seeding demo users...');
        const demoUsers = [
            {
                name: 'System Admin',
                email: 'admin@example.com', 
                password: 'password123',
            },
            {
                name: 'Automation Tester',
                email: 'tester@autolab.com',
                password: 'automation123',
            },
            {
                name: 'Student Demo',
                email: 'student@university.edu',
                password: 'studentpass',
            }
        ];

        // Must loop and use explicitly .create() so the Mongoose pre('save') hook dynamically hashes the bcrypt passwords
        for (const user of demoUsers) {
            await User.create(user);
        }

        console.log('Seeding massive batch of fake hardware products...');
        const sampleProducts = [
            {
                name: 'Wireless Mouse',
                image: 'https://dummyimage.com/400x300/000/fff&text=Mouse',
                description: 'Features a precise optical sensor and ergonomic design.',
                price: 29.99,
                countInStock: 10,
            },
            {
                name: 'Mechanical Keyboard',
                image: 'https://dummyimage.com/400x300/000/fff&text=Keyboard',
                description: 'RGB mechanical keyboard with satisfying clicky switches.',
                price: 89.99,
                countInStock: 5,
            },
            {
                name: 'HD Monitor',
                image: 'https://dummyimage.com/400x300/000/fff&text=Monitor',
                description: '27-inch HD monitor with 144Hz refresh rate for smooth visuals.',
                price: 249.99,
                countInStock: 3,
            },
            {
                name: 'USB-C Hub',
                image: 'https://dummyimage.com/400x300/000/fff&text=Hub',
                description: 'Versatile 7-in-1 USB-C hub with HDMI and SD card reader.',
                price: 45.00,
                countInStock: 15,
            },
            {
                name: '1080p Webcam',
                image: 'https://dummyimage.com/400x300/000/fff&text=Webcam',
                description: 'Crystal clear 1080p webcam with built-in noise-canceling microphone.',
                price: 59.99,
                countInStock: 8,
            },
            {
                name: 'Gaming Headset',
                image: 'https://dummyimage.com/400x300/000/fff&text=Headset',
                description: 'Surround sound gaming headset with reactive LED lighting.',
                price: 75.00,
                countInStock: 12,
            },
            {
                name: 'Mousepad XL',
                image: 'https://dummyimage.com/400x300/000/fff&text=Mousepad',
                description: 'Extra large desk mat for ultra-fast, smooth mouse movement.',
                price: 15.99,
                countInStock: 25,
            },
            {
                name: 'Laptop Stand',
                image: 'https://dummyimage.com/400x300/000/fff&text=Stand',
                description: 'Adjustable aluminum laptop stand for ergonomic height correction.',
                price: 35.00,
                countInStock: 6,
            }
        ];

        // Insert products all at once
        await Product.insertMany(sampleProducts);

        console.log('✅ ALL SEED DATA SUCCESSFULLY IMPORTED TO MONGODB!');
        process.exit();
    } catch (error) {
        console.error(`❌ Seeding Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
