import { useState } from 'react';

// Static internal dataset for search testing
const STATIC_DATA = [
    { id: 1, title: 'Introduction to Cypress', category: 'Testing', author: 'Alice Smith' },
    { id: 2, title: 'Mastering Playwright in 2026', category: 'Testing', author: 'Bob Jones' },
    { id: 3, title: 'Selenium Grid Best Practices', category: 'Infrastructure', author: 'Charlie Brown' },
    { id: 4, title: 'Advanced React Hooks', category: 'Frontend', author: 'Alice Smith' },
    { id: 5, title: 'Node.js Performance Tuning', category: 'Backend', author: 'David Clark' },
    { id: 6, title: 'Appium for Mobile Automation', category: 'Testing', author: 'Eve Adams' },
    { id: 7, title: 'The Future of Web Scraping', category: 'Tools', author: 'Bob Jones' },
    { id: 8, title: 'RESTful API Design Patterns', category: 'Backend', author: 'Charlie Brown' },
];

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        
        if (!query.trim()) {
            setResults([]);
            setHasSearched(true);
            return;
        }

        const lowerQuery = query.toLowerCase();
        
        // Filter against Title, Author, and Category
        const filtered = STATIC_DATA.filter(item => 
            item.title.toLowerCase().includes(lowerQuery) || 
            item.author.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery)
        );
        
        setResults(filtered);
        setHasSearched(true);
    };

    return (
        <div>
            <div className="mb-8 border-b pb-4">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Dynamic Search Playground</h2>
                <p className="text-gray-500 font-medium mt-2 leading-relaxed">
                    Interact with <code>id="searchBox"</code> and strike the <code>id="searchBtn"</code>.
                    Practice writing assertions that count the exact number of resulting rows based on an assortment of queries.
                </p>
            </div>

            <div className="bg-white border text-left border-gray-200 rounded-xl shadow-sm p-8">
                <form id="searchForm" onSubmit={handleSearch} className="form-container mb-8">
                    <div className="form-group flex flex-col sm:flex-row gap-4 items-end">
                        <div className="flex-1 w-full">
                            <label htmlFor="searchBox" className="form-label block text-sm font-medium text-gray-700 mb-1">Search Database</label>
                            <input
                                id="searchBox"
                                name="searchQuery"
                                data-testid="search-input"
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="input-field w-full px-5 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow text-lg"
                                placeholder="Search for 'Testing' or 'Alice'..."
                            />
                        </div>
                        <button
                            id="searchBtn"
                            type="submit"
                            className="btn btn-primary w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-lg shadow-sm transition-transform active:scale-95"
                        >
                            Search Record
                        </button>
                    </div>
                </form>

                {hasSearched && (
                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-slate-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                            <span id="resultCount" className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                                Query Result
                            </span>
                            <span className="bg-gray-200 text-gray-800 text-xs px-2.5 py-1 rounded-full font-bold">
                                {results.length} found
                            </span>
                        </div>
                        
                        {results.length > 0 ? (
                            <ul id="searchResultsList" className="results-list divide-y divide-gray-100">
                                {results.map((item) => (
                                    <li key={item.id} className="result-item p-5 hover:bg-slate-50 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                            <div>
                                                <h3 className="text-lg font-black text-gray-900 tracking-tight">{item.title}</h3>
                                                <p className="text-sm font-medium text-gray-500 mt-1">Written by: <span className="text-gray-700">{item.author}</span></p>
                                            </div>
                                            <span className="inline-block bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                                {item.category}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-16 flex flex-col items-center justify-center text-gray-500">
                                <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="text-lg font-medium opacity-80">No articles match your specific term.</span>
                            </div>
                        )}
                    </div>
                )}

                {!hasSearched && (
                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <h4 className="text-xs font-black text-gray-400 mb-3 uppercase tracking-widest flex items-center">
                            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span> Database Catalog
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {STATIC_DATA.map(item => (
                                <span key={item.id} className="text-xs font-medium bg-gray-50 text-gray-500 px-2 py-1 rounded border border-gray-200">
                                    {item.title}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
