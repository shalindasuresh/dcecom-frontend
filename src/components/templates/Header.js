import MetaMaskLogin from '../MetaMaskLogin';
import ProductList from '../ProductList';
import About from '../About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Router>
        <header>
          <div className="logo">Your Logo</div>
          <div className="login-button">
            <MetaMaskLogin></MetaMaskLogin>
          </div>
          <nav>
            {/* Navigation */}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About US</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Route Configuration */}
        <Routes>
          <Route exact path="/" />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
