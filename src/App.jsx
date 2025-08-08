import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Products from './components/Products';

function App() {
    return (
        <div>
            <Navbar />
            <nav style={{ margin: '10px 0' }}>
                <Link to="/">Login</Link> | <Link to="/products">Products</Link>
            </nav>

            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
