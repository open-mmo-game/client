import styles from "./styles.module.scss";

function CenteredPage({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default CenteredPage;
