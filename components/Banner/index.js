import PlayButton from "../PlayButton";
import styles from "./styles.module.scss";

function Banner() {
  return (
    <div className={styles.banner}>
      <img alt="Banner" className={styles.img} src="./images/banner.png" />
      <PlayButton />
    </div>
  );
}

export default Banner;
