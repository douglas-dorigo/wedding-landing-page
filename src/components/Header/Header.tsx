import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Nosso Grande Dia 💍</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><Link to="/douglas-e-mari">Início</Link></li>
                    <li><Link to="/douglas-e-mari/noivos">O Casal</Link></li>
                    <li><Link to="/douglas-e-mari/padrinhos">Padrinhos</Link></li>
                </ul>
            </nav>
        </header>
    );
}