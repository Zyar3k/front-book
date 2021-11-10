import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__topBar">
          <Link to="/" className="header__item header__item--logo">
            all<span>2</span>read
          </Link>
          <nav className="header__nav">
            <Link to="/statystyki" className="header__navItem">
              Statystyki
            </Link>
            <Link to="/twoja-lista" className="header__navItem">
              Twoja lista
            </Link>
            <Link to="/login" className="header__navItem">
              Zaloguj
            </Link>
            <Link to="/register" className="header__navItem">
              Zarejestruj
            </Link>
          </nav>
        </div>
        <div className="header__bottomBar">
          <div className="header__listSelect">a2r</div>
          <div className="header__listSelect">amazon</div>
          <div className="header__listSelect">bbc</div>
          <div className="header__listSelect">empik</div>
          <div className="header__listSelect">gandalf</div>
          <div className="header__listSelect">pozycje obowiązkowe</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
