import { useState } from "react";
import { Link } from "wouter";
import Card from "../../components/card/Card";
import styles from "./Login.module.css";

interface LoginProps {
  handleFormSubmit: (form: { username: string; password: string }) => void;
}

export const Login = (props: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Si el navegador pasa esta validación, los campos ya están correctos y llenos
    props.handleFormSubmit({
      username: username,
      password: password,
    });
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <main className={styles.loginContainer}>
      <section className={styles.loginCard}>
        <Card title="Login">
          <img src="imgs/mascotas.jpeg" alt="Paseo de mascotas" className={styles.bannerImg} />

          <header className={styles.loginHeader}>
            <h1>PetSitter</h1>
            <p>Inicia sesión para continuar</p>
          </header>

          <form onSubmit={handleSubmit}>
            <label className={styles.fieldLabel}>
              Usuario / Correo
              <input
                type="email" // Valida automáticamente que tenga formato de correo (o puedes usar "text" si es un nombre de usuario normal)
                value={username}
                onChange={handleUsernameChange}
                placeholder="ejemplo@correo.com"
                required // Evita que se envíe vacío
              />
            </label>

            <label className={styles.fieldLabel}>
              Contraseña
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Ingresa tu contraseña"
                required // Evita que se envíe vacío
                minLength={6} // Exige un mínimo de 6 caracteres nativamente
              />
            </label>

            <button type="submit" className={styles.fullWidthButton}>
              Iniciar sesión
            </button>
          </form>

          <footer className={styles.loginFooter}>
            <p>
              ¿No tienes una cuenta? <Link href="/register">Regístrate</Link>
            </p>
          </footer>
        </Card>
      </section>
    </main>
  );
};

export default Login;