const Login = () => {
  return (
    <main>
      <section className="form-section">
        <div className="form-container">
          <h1>Iniciar sesión</h1>

          <p>Ingresa a tu cuenta para continuar tu aventura.</p>

          <form id="loginForm">
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
                placeholder="Ingresa tu contraseña"
                minLength={6}
                required
              />
            </div>

            <p id="loginMessage" className="form-message"></p>

            <button type="submit" className="button">
              Iniciar sesión
            </button>
          </form>

          <p className="form-link">
            ¿No tienes una cuenta?
            <a href="register.html">Registrarse</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
