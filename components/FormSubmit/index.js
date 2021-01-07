import styles from "./styles.module.scss";

function FormSubmit({ children }) {
  return (
    <button type="submit" className={styles.submit}>
      {children}
    </button>
  );
}

export default FormSubmit;
