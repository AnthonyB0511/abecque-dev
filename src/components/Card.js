import photo from "../assets/img/portrait-dev.jpg";
import styles from "./Card.module.scss";
import { motion, useMotionValue } from "framer-motion";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import bs from "../assets/img/Bootstrap_logo.svg";

const Card = () => {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    return (
        <motion.div
            className={styles.portrait}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotateX: rotateX, rotateY: rotateY }}
            onHoverStart={() => {
                rotateX.set(0);
                rotateY.set(0);
            }}
            onHoverEnd={() => {
                rotateX.set(0);
                rotateY.set(0);
            }}
            onMouseMove={(event) => {
                // Calculer la rotation en fonction de la position de la souris
                const rect = event.currentTarget.getBoundingClientRect();
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const mouseX = event.clientX - rect.left - centerX;
                const mouseY = event.clientY - rect.top - centerY;
                rotateX.set(mouseY / centerY * 20); // Ajustez la valeur 10 selon votre préférence de sensibilité
                rotateY.set(-mouseX / centerX * 10); // Ajustez la valeur 10 selon votre préférence de sensibilité
            }}
        >
            <section className={styles.headerTitle}>
                <img className={styles.imgPortrait} src={photo} alt="Portrait" />
            </section>
            <section className={styles.title}>
                <h1>Anthony Becque</h1>
                <h2 className={styles.subtitle}>Développeur Javascript</h2>
            </section>
            <section className={styles.skills}>
                <article className={styles.type}>
                    <h3 className={styles.typeTitle}>Front-End</h3>
                    <div className="line"></div>
                    <div className={styles.logo}>
                        <div className={styles.image}><img src={html} alt="Logo html" className={styles.html} /></div>
                        <div className={styles.image}><img src={css} alt="Logo css" /></div>
                        <div className={styles.image}><img src={js} alt="Logo javascript" /></div>
                        <div className={styles.image}><img src={react} alt="Logo reactJs" /></div>
                    </div>
                </article>
                <article className={styles.type}>
                    <h3 className={styles.typeTitle}>Back-end</h3>
                    <div className="line"></div>
                    <div className={styles.logo}>

                    </div>
                </article>
            </section>

        </motion.div>
    );
};
export default Card;;