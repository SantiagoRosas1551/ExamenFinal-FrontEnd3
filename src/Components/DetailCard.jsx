import React, { useEffect } from "react";
import { useContext } from "react";
import { useDentistsContext } from "../Contexts/dentistContext";
import { useParams } from "react-router-dom";
import styles from "./DetailCard.module.css";

const DetailCard = () => {
  const { fetchData, filteredData, filterById } = useDentistsContext();
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (id) {
      filterById(id);
    }
  }, [id]);

  const dentist = filteredData[0];

  return (
    <>
      <h1>Detail about Dentist {id}</h1>
      <section className="card col-sm-12 col-lg-6 container ${state.theme} ">
        <div className={`card-body row `}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nombre: {dentist?.name}</li>
              <li className="list-group-item">
                email: {dentist?.email}
              </li>
              <li className="list-group-item">
                Usuario: {dentist?.username}
              </li>
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
