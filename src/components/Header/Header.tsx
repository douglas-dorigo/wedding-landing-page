import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>
        <Link to="/">Douglas & Mari</Link>
      </h2>

      <button className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>

      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}
        ref={navRef}
      >
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/noivos" onClick={toggleMenu}>
              Noivos
            </Link>
          </li>
          <li>
            <Link to="/padrinhos" onClick={toggleMenu}>
              Padrinhos
            </Link>
          </li>
          <li>
            <Link to="/cerimonia" onClick={toggleMenu}>
              Cerimônia
            </Link>
          </li>
          <li>
            <Link to="/presenca" onClick={toggleMenu}>
              Confirmar presença
            </Link>
          </li>
          <li>
            <Link to="/presentes" onClick={toggleMenu}>
              Lista de presentes
            </Link>
          </li>
          <li>
            <Link to="/carrinho" onClick={toggleMenu}>
              Carrinho
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
