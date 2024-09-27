import logo from "./logo.svg";
import "./App.css";

import Perfil from "./components/Perfil";

function App() {
  return (
    <div className="App">
      <Perfil name="Marcelo" age={`20`} city="Juiz de Fora" art="Musica" about="Nao tinha medo o tal Joao de santo cristo era o que todos diziam quando ele se perdeu"/>
    </div>
  );
}

export default App;
