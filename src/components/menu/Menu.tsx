import { Link } from "wouter";

const Menu = () => {
  return (
    <header>
      <nav>
        <div className="logo">Knight of Ruin</div>

        <ul className="nav-links">
          <li>
            <Link href="/">Inicio</Link>
          </li>

          <li>
            <Link href="#juego">El juego</Link>
          </li>

          <li>
            <Link href="/login">Iniciar sesión</Link>
          </li>

          <li>
            <Link href="/register">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
