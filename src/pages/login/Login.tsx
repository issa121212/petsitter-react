import { useState } from "react";
import { Link } from "wouter";
// NUEVO: Importación del hook personalizado para controlar el título de la pestaña del navegador
import useDocumentTitle from "../../hooks/useDocumentTitle";
// NUEVO: Importación del hook global de autenticación para desacoplar la lógica del componente
import useLogin from "../../hooks/useLogin";

const Login = () => {
  // NUEVO: Instanciamos el hook de login para acceder a la función onLogin y al estado de carga (loading)
  const login = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // NUEVO: Asigna dinámicamente el título "Login" a la pestaña del navegador al montar el componente
  useDocumentTitle("Login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NUEVO: Delegamos la lógica de autenticación directamente al hook global en lugar de usar props del padre
    login.onLogin({
      username,
      password,
    });
  };

  return (
    <main className="flex justify-center items-center min-h-[80vh] p-4">
      <section className="w-full max-w-md bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">PetSitter</h1>
          <p className="text-sm text-gray-500 mt-1">Inicia sesión para continuar</p>
        </header>

        {/* Mantenemos el formulario semántico para permitir el envío presionando la tecla Enter */}
        <form onSubmit={handleSubmit}>
          <label className="block mb-4 text-sm font-medium text-gray-700">
            Usuario / Correo
            <input
              type="email"
              required
              className="w-full mt-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="ejemplo@correo.com"
            />
          </label>

          <label className="block mb-4 text-sm font-medium text-gray-700">
            Contraseña
            <input
              type="password"
              required
              minLength={6}
              className="w-full mt-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
            />
          </label>

          <button
            type="submit"
            // NUEVO: Deshabilita el botón automáticamente y cambia su estilo visual cuando login.loading es true
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 disabled:opacity-50 mt-2"
            disabled={login.loading}
          >
            {/* NUEVO: Renderizado condicional del texto del botón según el estado de carga del hook */}
            {login.loading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>

        {/* NUEVO: Renderizado condicional para mostrar el correo del usuario una vez autenticado exitosamente */}
        {login.email && (
          <strong className="block mt-4 text-sm text-green-600 text-center">
            Hola usuario: {login.email}
          </strong>
        )}

        <footer className="mt-6 text-center text-sm text-gray-500">
          <p>
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="text-blue-600 hover:underline font-medium">
              Regístrate
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Login;