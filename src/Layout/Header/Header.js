import "./Header.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "Header__link active"
              : "Header__link"
          }
          to="/"
        >
          Strona główna
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "Header__link active"
              : "Header__link"
          }
          to="/listgifts"
        >
          Lista prezentów
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "Header__link active"
              : "Header__link"
          }
          to="/addgift"
        >
          Dodaj prezent
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "Header__link active"
              : "Header__link"
          }
          to="/register"
        >
          Rejestracja
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
