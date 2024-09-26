import styles from "./SubmitButton.module.css";

function SubmitButton({update}) {
  return (
    <div>
      <button className={styles.btn}>CONCLUIR EDICAO</button>
    </div>
  )
}

export default SubmitButton;