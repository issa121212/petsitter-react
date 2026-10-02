import { Link } from 'wouter';
import { Button } from '../../components/button/Button';

// 1. Definimos los tipos de datos para las mascotas y trabajadores
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

      {/* Sección de Mascotas usando .map() */}
      <section>
        <h2>Nuestros Peludos</h2>
        <div className="row">
          {pets.map((pet, index) => (
            <div className="col-6 col-sm-12 card" key={index}>
              <img src={pet.imgSrc} alt={pet.title} className="card-img" />
              <h3>{pet.title}</h3>
              <p>{pet.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Trabajadores usando .map() */}
      <section>
        <h2>Trabajadores</h2>
        <div className="row">
          {workers.map((worker, index) => (
            <div className="col-6 col-sm-12 card" key={index}>
              <img src={worker.imgSrc} alt={worker.title} className="card-img" />
              <h3>{worker.title}</h3>
              <p>{worker.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="agendar">
        <h2>Agendar Servicio</h2>
        <p>Para agendar un paseo para tu mascota, ingresa con tu cuenta o regístrate:</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="/login">
            <Button text="Ingresar Usuario" />
          </Link>
          <Link href="/register">
            <Button text="Registrarse" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;