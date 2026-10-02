import { useState } from "react";
import { Link } from "wouter";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Register.module.css";

export const Register = () => {
  const [genero, setGenero] = useState("masculino");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registro enviado exitosamente");
  };

  return (
    <main className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.title}>PetSitter 🐾</h2>

          <div className={styles.rowFields}>
            <Input id="nombre" name="nombre" label="Nombres" placeholder="Ej: Daniel" required />
            <Input id="apellido" name="apellido" label="Apellidos" placeholder="Ej: González" required />
          </div>

          <Input id="email" name="email" type="email" label="Correo electrónico" placeholder="Ej: javier@gmail.com" required />
          <Input id="telefono" name="telefono" type="tel" label="Teléfono" placeholder="Ej: 912345678" required />
          <Input id="rut" name="rut" label="RUT" placeholder="Ej: 12.345.678-5" required />

          <div className={styles.genderSection}>
            <span className={styles.genderLabel}>Sexo</span>
            <div className={styles.genderOptions}>
              <label className={styles.genderOption}>
                <input
                  type="radio"
                  name="genero"
                  value="masculino"
                  checked={genero === "masculino"}
                  onChange={() => setGenero("masculino")}
                />
                <span>Masculino</span>
              </label>

              <label className={styles.genderOption}>
                <input
                  type="radio"
                  name="genero"
                  value="femenino"
                  checked={genero === "femenino"}
                  onChange={() => setGenero("femenino")}
                />
                <span>Femenino</span>
              </label>

              <label className={styles.genderOption}>
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  checked={genero === "otro"}
                  onChange={() => setGenero("otro")}
                />
                <span>Otro</span>
              </label>
            </div>
          </div>

          <div className={styles.rowFields}>
            <Input id="password" name="password" type="password" label="Contraseña" placeholder="Mínimo 8 caracteres" required />
            <Input id="confirm-password" name="confirm-password" type="password" label="Confirmar Contraseña" placeholder="Repetir contraseña" required />
          </div>

          <Button type="submit" variant="contained" className={styles.fullWidthButton}>
            Registrar
          </Button>

          <p className={styles.registerFooter}>
            ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link> · <Link href="/">Volver al inicio</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;