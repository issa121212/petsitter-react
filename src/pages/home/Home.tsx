type GameCard = {
  icon: string;
  title: string;
  text: string;
};

const gameCards: GameCard[] = [
  {
    icon: "⚔️",
    title: "Combates",
    text: "Enfréntate a diferentes enemigos y utiliza tus habilidades para superar cada batalla.",
  },
  {
    icon: "🛡️",
    title: "Exploración",
    text: "Recorre bosques, ruinas y antiguos territorios llenos desecretos por descubrir.",
  },
  {
    icon: "🏰",
    title: "Aventura",
    text: "Descubre la historia del reino y decide el destino del caballero.",
  },
];

const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="row">
              <div className="col-6 hero-text">
                <span className="game-label"> RPG • DARK FANTASY </span>

                <h1>Knight of Ruin</h1>

                <h2>
                  El reino ha caído.
                  <br />
                  Tu aventura comienza.
                </h2>

                <p>
                  Explora un mundo en ruinas, descubre antiguos secretos y
                  enfréntate a peligrosos enemigos en una aventura RPG de pixel
                  art.
                </p>

                <div className="hero-buttons">
                  <a href="register.html" className="button">
                    {" "}
                    Crear cuenta{" "}
                  </a>

                  <a href="login.html" className="button secondary">
                    Iniciar sesión
                  </a>
                </div>
              </div>

              <div className="col-6 hero-image-container"></div>
            </div>
          </div>
        </section>

        <section id="juego" className="section">
          <span className="section-label"> EL MUNDO </span>

          <h2>Una aventura en un reino en ruinas</h2>

          <p className="section-intro">
            Un antiguo reino ha caído en la oscuridad. Explora sus territorios,
            enfréntate a sus peligros y descubre los secretos que se esconden
            entre sus ruinas.
          </p>

          <div className="row features">
            {gameCards.map((item) => {
              return (
                <article className="col-4 card">
                  <div className="card-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="register-section">
          <span className="section-label"> COMIENZA TU VIAJE </span>

          <h2>¿Estás listo para comenzar?</h2>

          <p>
            Crea tu cuenta y prepárate para descubrir el mundo de Knight of
            Ruin.
          </p>

          <a href="register.html" className="button">
            {" "}
            Registrarse{" "}
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
