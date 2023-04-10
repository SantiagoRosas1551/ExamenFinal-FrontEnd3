import React, { useContext, useEffect, useReducer } from "react";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import dentistReducer, { initialState } from "../reducer/dentistReducer";
import { ThemeContext } from "../Contexts/themeContext";

const DetailCard = () => {
  
  const { id } = useParams(); 
  const [stateDentist, dispatch] = useReducer(dentistReducer, initialState);
  const {state, toggleTheme} =useContext(ThemeContext)

  const { dentists, error, filteredById } = stateDentist;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    };
    fetchData();
    
  }, []); 

  const filteredDentist = filteredById || dentists.find(dentist => dentist.id === parseInt(id));

  return (
    <>
      <h1>Detail about OD. {filteredDentist?.name} </h1>
      <section className={`card col-sm-12 col-lg-6 container ${state.theme}`}>
        <div className="card-body row">
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className={`col-sm-12 col-lg-6 `}>
            <ul className="list-group">
              <li className="list-group-item">Nombre: {filteredDentist?.name}</li>
              <li className="list-group-item">email: {filteredDentist?.email}</li>
              <li className="list-group-item">Usuario: {filteredDentist?.username}</li>
            </ul>
            <div className="text-center">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button}`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCard;
