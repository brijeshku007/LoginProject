
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ProtectedTable from './components/ProtectedTable';

function App() {

  const isAuthenticated = () => {
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token') !== null;
};

  return (
    <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/register" />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route
                    path="/dashboard"
                    element={isAuthenticated() ? <ProtectedTable /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
  );
}

export default App;
