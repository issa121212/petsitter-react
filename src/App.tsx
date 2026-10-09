import { Route, Router, Switch } from "wouter";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Menu from "./components/menu/Menu";

const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

const App = () => {
  // Función que recibirá los datos enviados desde el componente Login
  const handleLoginSubmit = (form: { username: string; password: string }) => {
    console.log("Datos de login capturados en App.tsx:", form);
    alert(`Intentando iniciar sesión con el usuario: ${form.username}`);
    // Aquí más adelante podrás conectar tu API (fetch o axios) o usar tu Context
  };

  return (
    <Router base={base}>
      <Menu />
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Usamos una función dentro del Route para poder pasarle la prop */}
        <Route path="/login">
          {() => <Login handleFormSubmit={handleLoginSubmit} />}
        </Route>

        <Route path="/register" component={Register} />
        <Route>404: No such page!</Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;