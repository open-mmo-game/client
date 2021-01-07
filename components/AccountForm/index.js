import styles from "./styles.module.scss";

function AccountForm({ onSubmit, children }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default AccountForm;
