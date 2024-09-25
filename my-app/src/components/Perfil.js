import { useState, useEffect } from "react";
import styles from "./Perfil.module.css";

import perfilImage from "../img/3135768.png";
import background from "../img/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg";

import EditPerfil from "../form/EditPerfil";
import Publication from "./Publication";

function Perfil() {
  const [dadosPerfil, setDadosPerfil] = useState(null);

  const [showEditPerfil, setShowEditPerfil] = useState(false);

  const [showPublication, setShowPublication] = useState(true);
  const [showCalendary, setShowCalendary] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/perfil", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setDadosPerfil(data);
          console.log(data);
        })
        .catch((error) => console.error("Erro ao buscar os dados:", error));
    }, 300);
  }, []);

  if (!dadosPerfil || !dadosPerfil.perfil) {
    return <div>Carregando...</div>;
  }

  const info = dadosPerfil.perfil[0]; 

  function toggleEditPerfil() {
    setShowEditPerfil(!showEditPerfil);
  }

  function togglePublication() {
    setShowPublication(true);
    setShowCalendary(false);
  }

  function toggleCalendary() {
    setShowCalendary(true);
    setShowPublication(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDadosPerfil((prevState) => {
      if (prevState && prevState.perfil && prevState.perfil.length > 0) {
        return {
          ...prevState,
          perfil: [
            {
              ...prevState.perfil[0],
              [name]: value,
            },
          ],
        };
      }
      return prevState; // Retorna o estado anterior se as condições não forem atendidas
    });
  }

  return (
    <div className={styles.perfil}>
      <header>
        <img className={styles.perfil_pic} src={perfilImage} alt="img_perfil" />
        <img
          className={styles.perfil_background}
          src={background}
          alt="img_perfil"
        />
        <button className={styles.btn_edit} onClick={toggleEditPerfil}>
          {!showEditPerfil ? "EDITAR PERFIL" : "FECHAR"}
        </button>
        {!showEditPerfil ? (
          <div>
            <div className={styles.container}>
              <div className={styles.div1}>
                <ul>
                  <li>Nome: {info.name}</li>
                  <li>Idade: {info.age}</li>
                  <li>Cidade: {info.city}</li>
                  <li>Arte: {info.art}</li>
                </ul>
              </div>
              <div className={styles.div2}>
                <p>{info.about}</p>
              </div>
            </div>
            <div>
              <button onClick={togglePublication}>PUBLICAÇÕES</button>
              <button onClick={toggleCalendary}>AGENDA</button>
            </div>
            <div>
              {showPublication && <Publication />}
              {showCalendary && <div>Seção de Agenda</div>}
            </div>
          </div>
        ) : (
          <EditPerfil
            info={info}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </header>
    </div>
  );
}

export default Perfil;
