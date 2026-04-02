import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

// Public Pages
import Login from './pages/Login';
import Register from './pages/Register';

// Protected Pages
import Dashboard from './pages/Dashboard';
import LoginPlayground from './pages/playgrounds/LoginPlayground';
import RegisterPlayground from './pages/playgrounds/RegisterPlayground';
import FormPlayground from './pages/playgrounds/FormPlayground';
import ButtonsAlerts from './pages/playgrounds/ButtonsAlerts';
import Products from './pages/playgrounds/Products';
import Search from './pages/playgrounds/Search';

function App() {
  return (
    // AuthProvider manages our Axios connections to the backend
    <AuthProvider>
      <Router>
        <Routes>
          {/* Essential Entry Points */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Base Redirect forces users to Login page as requested */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Protected Area - Blocked by ProtectedRoute and styled by Layout */}
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* The Automation Practice Modules */}
            <Route path="/playgrounds/login" element={<LoginPlayground />} />
            <Route path="/playgrounds/register" element={<RegisterPlayground />} />
            <Route path="/playgrounds/forms" element={<FormPlayground />} />
            <Route path="/playgrounds/alerts" element={<ButtonsAlerts />} />
            <Route path="/playgrounds/products" element={<Products />} />
            <Route path="/playgrounds/search" element={<Search />} />
          </Route>

          {/* 404 Fallback Catch-all */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
