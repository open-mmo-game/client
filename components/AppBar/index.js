import AppLink from "../AppLink";
import LoginMenu from "../LoginMenu";

import styles from "./styles.module.scss";

function AppBar() {
  return (
    <nav className={styles.bar}>
      <div className={styles.contents}>
        <ul className={styles.links}>
          <AppLink href="/" exact>
            Inicio
          </AppLink>
          <AppLink href="/wiki">Wiki</AppLink>
          <AppLink href="/forum">Foro</AppLink>
        </ul>
        <ul className={styles.links}>
          <LoginMenu />
        </ul>
      </div>
    </nav>
  );
}

export default AppBar;
