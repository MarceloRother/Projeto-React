import { useEffect, useState } from "react";

import Input from "./Input.js";
import SubmitButton from "./SubmitButton.js";


function EditProject(info, handleSubmit) {
  const [dadosPerfil, setDadosPerfil] = useState(null);

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

  //const info = dadosPerfil.perfil[0];

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(dadosPerfil);
  };

  function handleChange(e) {
    setDadosPerfil({ ...dadosPerfil, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} >
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder="Nome"
        handleOnChange={handleChange}
        value={info.name ? info.name : ''}
      />
      <Input
        type="number"
        text="Idade"
        name="age"
        placeholder="Idade"
        handleOnChange={handleChange}
        value={info.age ? info.age : ''}
      />
      <Input
        type="text"
        text="Cidade"
        name="city"
        placeholder="Cidade"
        handleOnChange={handleChange}
        value={info.city ? info.city : ''}
      />
      <Input
        type="text"
        text="Arte"
        name="art"
        placeholder="Arte"
        handleOnChange={handleChange}
        value={info.art ? info.art : ''}
      />
      <SubmitButton/>
    </form>
  );
}

export default EditProject;