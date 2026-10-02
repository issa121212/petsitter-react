import { Link } from 'wouter';

export const Login = () => {
  return (
    <main className="login-container">
      <section className="login-card">
        <img src="imgs/mascotas.jpeg" alt="Paseo de mascotas" />

        <header className="login-header">
          <h1>PetSitter</h1>
          <p>Inicia sesión para continuar</p>
        </header>

        <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>

            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>

            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button type="submit" className="button is-primary login-button">
            Iniciar sesión
          </button>

          <p id="mensaje" className="mensaje"></p>
        </form>

        <footer className="login-footer">
          <p>
            ¿No tienes una cuenta?{' '}
            <Link href="/register">Regístrate</Link>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Login;