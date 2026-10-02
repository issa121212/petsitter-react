import { Link } from "wouter";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";

type PetSitterItem = {
  title: string;
  description: string;
  imgSrc: string;
};

const pets: PetSitterItem[] = [
  {
    title: "Rocky",
    description: "Golden Retriever · 3 años · Enérgico y juguetón.",
    imgSrc: "imgs/golden.avif",
  },
  {
    title: "Luna",
    description: "Gata Mestiza · 2 años · Regalona y tranquila.",
    imgSrc: "imgs/gato.jpg",
  },
];

const workers: PetSitterItem[] = [
  {
    title: "Carlos Muñoz",
    description: "Paseador canino certificado con 4 años de experiencia.",
    imgSrc: "imgs/carlos.webp",
  },
  {
    title: "Valentina Soto",
    description: "Cuidadora especialista en primeros auxilios veterinarios.",
    imgSrc: "imgs/valentina.webp",
  },
];

export const Home = () => {
  return (
    <main>
      <section>
        <h2>¿Quiénes Somos?</h2>
        <p>De la mano de un equipo especializado, cuidamos y paseamos a tus mascotas con dedicación y seguridad diaria.</p>
      </section>

      {/* Mascotas renderizadas con el componente <Card> */}
      <section>
        <h2>Nuestros Peludos</h2>
        <div className="row">
          {pets.map((pet, index) => (
            <div className="col-6 col-sm-12" key={index}>
              <Card
                image={pet.imgSrc}
                title={pet.title}
                subtitle={pet.description}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trabajadores renderizados con el componente <Card> */}
      <section>
        <h2>Trabajadores</h2>
        <div className="row">
          {workers.map((worker, index) => (
            <div className="col-6 col-sm-12" key={index}>
              <Card
                image={worker.imgSrc}
                title={worker.title}
                subtitle={worker.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginTop: "24px" }}>
        <h2>Agendar Servicio</h2>
        <p>Para agendar un paseo para tu mascota, ingresa con tu cuenta o regístrate:</p>
        <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
          <Link href="/login">
            <Button variant="outlined">Ingresar Usuario</Button>
          </Link>
          <Link href="/register">
            <Button variant="contained">Registrarse</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;