import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const navClick = () => {
    setClick(false);
  };
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/awlogo.svg" alt="AW Painting" />
          </a>
        </Link>
      </div>

      <ul className={click ? "nav-active" : "nav-links"}>
        <li>
          <Link href="/">
            <a onClick={navClick}>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/gallery">
            <a onClick={navClick}>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/appointments">
            <a onClick={navClick}>Appointments</a>
          </Link>
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        <img src={click ? "/close.svg" : "/menu.svg"} alt="menu" />
      </div>
    </nav>
  );
};

export default NavBar;
