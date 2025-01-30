import { useEffect, useState } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import styles from './Countdown.module.css';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isWeddingDay: boolean;
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isWeddingDay: false,
    });

    useEffect(() => {
        const weddingDate = new Date('2025-08-02T00:00:00');

        const updateCountdown = () => {
            const now = new Date();
            const isWeddingDay = now >= weddingDate;

            if (isWeddingDay) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    isWeddingDay: true,
                });
            } else {
                setTimeLeft({
                    days: differenceInDays(weddingDate, now),
                    hours: differenceInHours(weddingDate, now) % 24,
                    minutes: differenceInMinutes(weddingDate, now) % 60,
                    seconds: differenceInSeconds(weddingDate, now) % 60,
                    isWeddingDay: false,
                });
            }
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Atualiza imediatamente

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <section className={styles.countdown}>
            <h2>Contagem Regressiva ⏳</h2>
            {timeLeft.isWeddingDay ? (
                <p>O grande dia chegou! 🎉</p>
            ) : (
                <div className={styles.countdownTimer}>
                    <div className={styles.countdownItem}>
                        <span>{timeLeft.days}</span>
                        <p>Dias</p>
                    </div>
                    <div className={styles.countdownItem}>
                        <span>{timeLeft.hours}</span>
                        <p>Horas</p>
                    </div>
                    <div className={styles.countdownItem}>
                        <span>{timeLeft.minutes}</span>
                        <p>Minutos</p>
                    </div>
                    <div className={styles.countdownItem}>
                        <span>{timeLeft.seconds}</span>
                        <p>Segundos</p>
                    </div>
                </div>
            )}
        </section>
    );
}