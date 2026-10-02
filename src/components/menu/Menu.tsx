import { Link } from "wouter";
import styles from "./Menu.module.css";
import Button from "../button/Button";

const Menu = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoBox}>
        <img src="imgs/logo-marca.jpeg" alt="Logo PetSitter" width="45" height="45" />
        <h1>PetSitter</h1>
      </Link>

      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/login">
              <Button variant="outlined">Iniciar Sesión</Button>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <Button variant="contained">Registrarse</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;