import Input from "./Input.js";
import SubmitButton from "./SubmitButton.js";

import styles from "./Input.module.css"

function EditPerfil({
  info,
  setName,
  setAge,
  setCity,
  setArt,
  update
}) {
  return (
    <div>
      <form className={styles.form}>
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder={info.name ? info.name : "Nome"}
        handleOnChange={(e) => {
          setName(e.target.value)
          update()
        }}
        value={info.name}
      />
      <Input
        type="number"
        text="Idade"
        name="age"
        placeholder={info.age ? info.age : "Idade"}
        handleOnChange={(e) => {
          setAge(e.target.value)
          update()
        }}
        value={info.age}
      />
      <Input 
        type="text"
        text="Cidade"
        name="city"
        placeholder={info.city ? info.city : "Cidade"}
        handleOnChange={(e) => {
          setCity(e.target.value)
          update()
        }}
        value={info.city}
      />
      <Input
        type="text"
        text="Arte"
        name="art"
        placeholder={info.art ? info.art : "Arte"}
        handleOnChange={(e) => {
          setArt(e.target.value)
          update()
        }}
        value={info.art}
      />
    </form>
    <SubmitButton update={update}/>
    </div>
  );
}

export default EditPerfil;
