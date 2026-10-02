import { Link } from 'wouter';

export const Register = () => {
  return (
    <div className="tarjeta-formulario">
      <form id="form-registro" onSubmit={(e) => e.preventDefault()}>
        <h2 className="has-text-centered is-size-3 has-text-weight-bold mb-4">PetSitter 🐾</h2>

        <div className="fila campo">
          <div className="columna">
            <label htmlFor="nombre">Nombres</label>
            <input id="nombre" name="nombre" className="input" type="text" placeholder="Ej: Daniel" />
          </div>
          <div className="columna">
            <label htmlFor="apellido">Apellidos</label>
            <input id="apellido" name="apellido" className="input" type="text" placeholder="Ej: González" />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" className="input" type="email" placeholder="Ej: javier@gmail.com" />
        </div>

        <div className="campo">
          <label htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" className="input" type="tel" placeholder="Ej: 912345678" />
        </div>

        <div className="campo">
          <label htmlFor="rut">RUT</label>
          <input id="rut" name="rut" className="input" type="text" placeholder="Ej: 12.345.678-5" />
        </div>

        <div className="campo">
          <label>Sexo</label>
          <div className="opciones-genero">
            <label className="opcion-btn">
              <input type="radio" name="genero" value="masculino" />
              <span>Masculino</span>
            </label>
            <label className="opcion-btn">
              <input type="radio" name="genero" value="femenino" />
              <span>Femenino</span>
            </label>
            <label className="opcion-btn">
              <input type="radio" name="genero" value="otro" />
              <span>Otro</span>
            </label>
          </div>
        </div>
        
        <div className="fila campo">
          <div className="columna">
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" className="input" type="password" placeholder="Mínimo 8 caracteres" />
          </div>
          <div className="columna">
            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input id="confirm-password" name="confirm-password" className="input" type="password" placeholder="Repetir contraseña" />
          </div>
        </div>

        <button type="submit" className="button is-info is-fullwidth mt-4" id="btn-submit">
          Registrar
        </button>

        <p className="has-text-centered mt-3 is-size-7">
          ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link> · <Link href="/">Volver al inicio</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;