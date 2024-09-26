import logo from "./logo.svg";
import "./App.css";

import Perfil from "./components/Perfil";

function App() {
  return (
    <div className="App">
      <Perfil name="Marcelo" age={`20`} city="Juiz de Fora" art="Musica" />
    </div>
  );
}

export default App;
