import styles from './GiftList.module.css';

interface Gift {
    name: string;
    price: string;
}

export default function GiftList() {
    const gifts: Gift[] = [
        { name: 'Jantar Romântico', price: 'R$ 200' },
        { name: 'Passeio de Balão', price: 'R$ 400' },
        { name: 'Cota para Lua de Mel', price: 'R$ 500' },
    ];

    return (
        <section className={styles.gifts}>
            <h2>Lista de Presentes 🎁</h2>
            <ul className={styles.giftList}>
                {gifts.map((gift, index) => (
                    <li key={index} className={styles.giftItem}>
                        <a href="#">{gift.name} - {gift.price}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}