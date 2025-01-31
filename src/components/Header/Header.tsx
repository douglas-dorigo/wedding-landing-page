import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Douglas & Mari</Link>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
          <li><Link to="/noivos" onClick={() => setIsMenuOpen(false)}>Noivos</Link></li>
          <li><Link to="/padrinhos" onClick={() => setIsMenuOpen(false)}>Padrinhos</Link></li>
          <li><Link to="/presenca" onClick={() => setIsMenuOpen(false)}>Confirmar presença</Link></li>
          <li><Link to="/presentes" onClick={() => setIsMenuOpen(false)}>Lista de presentes</Link></li>
          <li><Link to="/carrinho" onClick={() => setIsMenuOpen(false)}>Carrinho</Link></li>
        </ul>
      </nav>

      <button className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
    </header>
  );
};
