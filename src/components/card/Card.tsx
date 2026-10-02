import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Card = ({ image, title, subtitle, children }: CardProps) => {
  return (
    <article className={styles.card}>
      {image && <img src={image} alt={title || "Imagen"} className={styles.cardImg} />}
      {title && <h3 className={styles.title}>{title}</h3>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children && <div className={styles.body}>{children}</div>}
    </article>
  );
};

export default Card;