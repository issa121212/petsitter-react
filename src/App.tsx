import { Route, Router, Switch } from "wouter";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Menu from "./components/menu/Menu";

const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

const App = () => {
  return (
    <Router base={base}>
      <Menu />
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Como el Login ahora usa su propio hook y cliente, se renderiza directamente */}
        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />
        <Route>404: No such page!</Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;