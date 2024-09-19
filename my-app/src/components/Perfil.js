import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import styles from "./Perfil.module.css";

import perfil from "../img/3135768.png";
import background from "../img/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg";

import EditPerfil from "./EditPerfil";

function Perfil(info) {
  const [showEditPerfil, setShowEditPerfil] = useState(false);
  //const [showPublication, setShowPublication] = useState(true)
  //const [showCalendary, setShowCalendary] = useState(false)

  function toggleEditPerfil() {
    setShowEditPerfil(!showEditPerfil);
  }

  return (
    <div>
      <header>
        <div className={styles.header}>
          <img className={styles.perfil_pic} src={perfil} alt="img_perfil" />

          <button className={styles.btn_edit} onClick={toggleEditPerfil}>
            {!showEditPerfil ? "EDITAR PERFIL" : "FECHAR"}
          </button>
        </div>
      </header>
      <div>
        {!showEditPerfil ? (
          <div>
            <div>
              <ul>
                <ol>Nome: {info.name}</ol>
                <ol>Idade: {info.age}</ol>
                <ol>Cidade: {info.city}</ol>
                <ol>Arte: {info.art}</ol>
              </ul>
            </div>
            <div>
              <p>{info.about}</p>
            </div>
          </div>
        ) : (
          <EditPerfil />
        )}
      </div>

      <div>
        <button>PUBLICACOES</button>
        <button>AGENDA</button>
      </div>
    </div>
  );
}

export default Perfil;
