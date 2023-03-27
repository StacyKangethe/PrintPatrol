import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <img src="Logo.png" className="App-logo" alt="logo" ></img>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
        <ul>
          <li> 
          <Link to="/">Home</Link>
          </li> 
          <li>
          <Link to="/shop">Shop</Link>
          </li>
          <li>
          <Link to="/DropOffPOints">Drop-Off Points</Link>
          </li>
          <li>
          <Link to="/FeaturedPost">Companies</Link>
          </li>
          <li>
          <Link to="/About">About</Link>
          </li>
          <li>
          <Link to="/Blog">Blog</Link>
          </li>

          <Link to="/SignUp">
            <button className="btn">REGISTER</button>
          </Link>
          <Link to="/SignIn">
            <button className="btn btn__login">LOGIN</button>
          </Link>
        </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;