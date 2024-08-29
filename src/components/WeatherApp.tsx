import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faLocationDot,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const WeatherApp = () => {
  return (
    <>
      <section>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Mantova</p>
        </div>
        <form action="">
          <input type="text" placeholder="Inserisci la città" />
          <button type="submit"></button>
        </form>
      </section>
      <section>
        <figure>
          <img src="#" alt="" />
        </figure>
        <div>
          <p>Gio, 29 Ago</p>
          <ul className="cards-container">
            <li className="card">
              <span>Humidity</span> <FontAwesomeIcon icon={faDroplet} />{" "}
              <span>%</span>
            </li>
            <li className="card">
              <span>Wind</span> <FontAwesomeIcon icon={faWind} />{" "}
              <span>km/h</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default WeatherApp;
