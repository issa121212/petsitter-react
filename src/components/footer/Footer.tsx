import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p><strong>PetSitter Chile</strong> · Cuidado y paseos profesionales</p>
      <p>Contacto: contacto@petsitter.cl | +56 9 1234 5678 | Santiago, Chile</p>
      <p>© 2026 PetSitter. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;