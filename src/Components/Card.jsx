import styles from "./Card.module.css";
import { useContext } from "react";
import {ThemeContext}from '../Contexts/themeContext'
import { useDentistsContext } from "../Contexts/dentistContext";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {state, toggleTheme} =useContext(ThemeContext)
  const { addToFavorites } = useDentistsContext();

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${state.theme}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentist/${props.id}`}>
            <h5 className={`card-title ${styles.title}`}>{props.name}</h5>
          </Link>
        <button onClick={addToFavorites} className="heartButton">💗️</button>
        </div>
      </div>
    </>
  );
};

export default Card;
