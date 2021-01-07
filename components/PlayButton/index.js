import Link from "next/link";

import styles from "./styles.module.scss";

function PlayButton() {
  return (
    <Link href="/play">
      <a className={styles.button}>¡Juega Ahora!</a>
    </Link>
  );
}

export default PlayButton;
