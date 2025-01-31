import styles from './Gifts.module.css';

const gifts = [
  { id: 1, name: 'Jogo de Panelas', price: 'R$ 250,00', image: '/images/panelas.jpg' },
  { id: 2, name: 'Conjunto de Taças', price: 'R$ 120,00', image: '/images/tacas.jpg' },
  { id: 3, name: 'Aspirador de Pó', price: 'R$ 350,00', image: '/images/aspirador.jpg' },
  { id: 4, name: 'Micro-ondas', price: 'R$ 600,00', image: '/images/microondas.jpg' },
];

export default function Gifts() {
  return (
    <div className={styles.giftList}>
      {gifts.map((gift) => (
        <div key={gift.id} className={styles.giftItem}>
          <img src={gift.image} alt={gift.name} className={styles.giftImage} />
          <h3>{gift.name}</h3>
          <p>{gift.price}</p>
        </div>
      ))}
    </div>
  );
};
