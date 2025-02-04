import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchWeather } from '../../store/slices/weatherSlice';
import styles from './Weather.module.css';

export default function Weather() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (loading) return <p>Carregando previsão do tempo...</p>;
  if (error || !data) return <p>Erro ao buscar a previsão do tempo.</p>;

  // Filtrando os 5 dias com base na data do casamento
  const filteredWeatherData = data.slice(0, 5);

  // Índice do dia do meio
  const middleIndex = Math.floor(filteredWeatherData.length / 2);

  return (
    <div className={styles.weatherContainer}>
      {filteredWeatherData.length ? 
        filteredWeatherData?.map((day, index: number) => (
        <div key={index} className={`${styles.weatherDay} ${
          index === middleIndex ? styles.highlighted : ''
        }`}>
          {/* Data do dia */}
          <div className={styles.date}>{new Date(day.time * 1000).toLocaleDateString("pt-BR")}</div>
          
          {/* Ícone do clima */}
          <div className={`${styles.icon} ${styles[day.icon]}`}>
            <i className={`wi ${day.classIcon}`}></i>
          </div>
          
          {/* Temperaturas mínimas e máximas */}
          <div className={styles.temperature}>
            <p>
              {Math.round(day.temperatureMin)}°C
              <span>/</span>{
              Math.round(day.temperatureMax)}°C
            </p>
          </div>
        </div>
      )) : (
        <p>Erro ao buscar a previsão do tempo para essa data.</p>
      )}
    </div>
  );
}
