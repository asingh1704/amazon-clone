import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ basket }) => {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <img src="images/searchIcon.svg" className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header_link">
          <div className="header__linkitem">
            <span className="header__linkline1">Hello Abhinav</span>
            <span className="header__linkline2">Logout</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header__linkitem">
            <span className="header__linkline1">Return</span>
            <span className="header__linkline2">Order</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header__linkitem">
            <span className="header__linkline1">Watch</span>
            <span className="header__linkline2">Prime</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div>
            <img src="images/cartIcon.png" className="header__cartIcon" />
            <span>{basket.items.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
