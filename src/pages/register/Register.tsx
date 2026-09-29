const Register = () => {
  return (
    <main>
      <section className="form-section">
        <div className="form-container">
          <h1>Crear cuenta</h1>

          <p>Regístrate y prepárate para entrar al mundo de Knight of Ruin.</p>

          <form id="registerForm">
            <div className="form-group">
              <label htmlFor="name">Nombre de usuario</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                minLength={3}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mínimo 6 caracteres"
                minLength={6}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Repite tu contraseña"
                minLength={6}
                required
              />
            </div>

            <p id="registerMessage" className="form-message"></p>

            <button type="submit" className="button">
              Crear cuenta
            </button>
          </form>

          <p className="form-link">
            ¿Ya tienes una cuenta?
            <a href="login.html">Iniciar sesión</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Register;
