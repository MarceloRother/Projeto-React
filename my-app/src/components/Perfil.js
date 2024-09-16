import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import styles from "./Perfil.module.css";

function Perfil(info) {
  return (
    <div className={styles.sidebar}>
      <header>
        <img className={styles.sidebar_pic} src="" alt="img_perfil" />
        <img className={styles.sidebar_pic} src="" alt="img_backgroud" />
        <button>EDITAR PERFIL</button>
      </header>
      <div>
        <div>
          <p>NOME/APELIDO</p>
          <p>NASCIMENTO</p>
          <p>CIDADE</p>
          <p>ARTE</p>
        </div>
        <div>
          <p>SOBRE</p>
        </div>
        <div>
          <button>PUBLICACOES</button>
          <button>AGENDA</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
