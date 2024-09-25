import Input from "./Input.js";
import SubmitButton from "./SubmitButton.js";

function EditPerfil({ info, handleSubmit, submit, handleChange }) {
  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder={info.name ? info.name : "Nome"}
        handleOnChange={handleChange}
        value={info.name || ""}
      />
      <Input
        type="number"
        text="Idade"
        name="age"
        placeholder={info.age ? info.age : "Idade"}
        handleOnChange={handleChange}
        value={info.age || ""}
      />
      <Input
        type="text"
        text="Cidade"
        name="city"
        placeholder={info.city ? info.city : "Cidade"}
        handleOnChange={handleChange}
        value={info.city || ""}
      />
      <Input
        type="text"
        text="Arte"
        name="art"
        placeholder={info.art ? info.art : "Arte"}
        handleOnChange={handleChange}
        value={info.art || ""}
      />
      <Input
        type="text"
        text="Sobre"
        name="about"
        placeholder={info.about ? info.about : "Sobre"}
        handleOnChange={handleChange}
        value={info.about || ""}
      />
      <SubmitButton />
    </form>
  );
}

export default EditPerfil;
