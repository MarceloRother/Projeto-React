import { useState, useEffect } from "react";
import styles from "./Perfil.module.css";

import perfilImage from "../img/3135768.png";
import background from "../img/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg";

import EditPerfil from "../form/EditPerfil";
import Publication from "./Publication";

function Perfil() {
  const [dadosPerfil, setDadosPerfil] = useState(null); // Estado inicial como null
  const [showEditPerfil, setShowEditPerfil] = useState(false);
  const [showPublication, setShowPublication] = useState(true);
  const [showCalendary, setShowCalendary] = useState(false);

  function toggleEditPerfil() {
    setShowEditPerfil(!showEditPerfil);
  }

  function showPublicationSection() {
    setShowPublication(true);
    setShowCalendary(false);
  }

  function showCalendarySection() {
    setShowCalendary(true);
    setShowPublication(false);
  }

  function editPost(project) {
    setDadosPerfil(info)
  }

  useEffect(() => {
    // Simulação de chamada de API
    const fetchData = async () => {
      const data = {
        "perfil": [
          {
            "name": "Marcelo",
            "age": "20",
            "city": "Juiz de Fora",
            "art": "Cantor",
            "about": "Nascido em Juiz de Fora, amo animais e toco violão"
          }
        ]
      };
      setDadosPerfil(data);
    };

    fetchData();
  }, []);

  // Verificando se dadosPerfil está disponível antes de acessar info
  if (!dadosPerfil) {
    return <div>Carregando...</div>;
  }

  const info = dadosPerfil.perfil[0]; // Acessando o primeiro perfil após os dados estarem disponíveis

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
            <div>
              <ul> {/* Usando <ol> para lista ordenada */}
                <li>Nome: {info.name}</li>
                <li>Idade: {info.age}</li>
                <li>Cidade: {info.city}</li>
                <li>Arte: {info.art}</li>
              </ul>
            </div>
            <div>
              <p>{info.about}</p>
            </div>
          </div>
        ) : (
          <EditPerfil info={{info, editPost}}/>
        )}
        <div>
          <button onClick={showPublicationSection}>PUBLICACOES</button>
          <button onClick={showCalendarySection}>AGENDA</button>
        </div>
        <div>
          {showPublication && (
            <div>
              <Publication />
            </div>
          )}
          {showCalendary && <div>Seção de Agenda</div>}
        </div>
      </header>
    </div>
  );
}

export default Perfil;
