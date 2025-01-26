import { DarkThemeToggle } from 'flowbite-react';
import { AuthProvider, useAuth } from './context/auth';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Splashscreen from './pages/Splashscreen';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Splashscreen />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Registration />}></Route>
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    ></Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;
