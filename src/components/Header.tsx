import styles from "./Header.module.css";
import logoSvg from "../assets/Logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSvg} />
    </header>
  );
}

export default Header;
