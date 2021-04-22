import styles from "./style.module.scss";

export default function Header() {
    return (
      <header className={styles.headerContainer}>
          <img src="/logo.svg" alt="Podcastr"/>
          <p>O melhor para você ouvir, sempre</p>
        </header>
    );
}
