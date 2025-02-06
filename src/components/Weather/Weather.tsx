import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchWeather } from "../../store/slices/weatherSlice";
import styles from "./Weather.module.css";

const formatDateWithWeekday = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  // Obtém o nome do dia da semana, exibe como "short" (abreviado) e transforma em maiúsculas
  const weekday = date
    .toLocaleDateString("pt-BR", { weekday: "short" })
    .toUpperCase()
    .replace(".", "");

  // Formata a data no formato DD/MM, sem o ano
  const formattedDate = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });

  return `${formattedDate} (${weekday})`;
};

export default function Weather() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather,
  );

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (loading) return <p>Carregando previsão do tempo...</p>;
  if (error || !data) return <p>Erro ao buscar a previsão do tempo.</p>;

  // Filtrando os 5 dias com base na data do casamento
  const filteredWeatherData = data.slice(0, 5);

  return (
    <div className={styles.weatherContainer}>
      {filteredWeatherData.length ? (
        filteredWeatherData?.map((day, index: number) => (
          <div
            key={index}
            className={`${styles.weatherDay} ${
              index === 0 ? styles.highlighted : ""
            }`}
          >
            {/* Data do dia */}
            <div className={styles.date}>{formatDateWithWeekday(day.time)}</div>

            <div className={styles.content}>
              {/* Ícone do clima */}
              <div className={`${styles.icon} ${styles[day.icon]}`}>
                <i className={`wi ${day.classIcon}`}></i>
              </div>

              {/* Temperaturas mínimas e máximas */}
              <div className={styles.temperature}>
                {index === 0 && (
                  <span className={styles.currentlyTemperature}>
                    {Math.round(day.currentlyTemperature)}°C
                  </span>
                )}
                <p>
                  {Math.round(day.temperatureMin)}°C
                  <span>/</span>
                  {Math.round(day.temperatureMax)}°C
                </p>
              </div>
            </div>

            {/* Informações extras apenas no dia atual */}
            {index === 0 && (
              <div className={styles.extraInfo}>
                <span>
                  <i className="wi wi-umbrella"></i> {day.precipProbability}%
                </span>
                <span>
                  <i className="wi wi-strong-wind"></i> {day.windSpeed} km/h
                </span>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Erro ao buscar a previsão do tempo para essa data.</p>
      )}
    </div>
  );
}
