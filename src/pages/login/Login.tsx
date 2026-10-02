import { useState } from "react";
import { Link } from "wouter";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Iniciando sesión con: ${email}`);
  };

  return (
    <main className={styles.loginContainer}>
      <section className={styles.loginCard}>
        <img src="/imgs/mascotas.jpeg" alt="Paseo de mascotas" className={styles.bannerImg} />

        <header className={styles.loginHeader}>
          <h1>PetSitter</h1>
          <p>Inicia sesión para continuar</p>
        </header>

        <form onSubmit={handleSubmit}>
          <Input
            label="Correo electrónico"
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Contraseña"
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" variant="contained" className={styles.fullWidthButton}>
            Iniciar sesión
          </Button>
        </form>

        <footer className={styles.loginFooter}>
          <p>
            ¿No tienes una cuenta? <Link href="/register">Regístrate</Link>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Login;