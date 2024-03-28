import photo from "../assets/img/portrait-dev.jpg";
import styles from "./Card.module.scss";
import { motion, useMotionValue } from "framer-motion";
import framer from "../assets/img/framer-motion.svg";
import { Link } from "react-router-dom";

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
                rotateX.set(mouseY / centerY * 12); // Ajustez la valeur 10 selon votre préférence de sensibilité
                rotateY.set(-mouseX / centerX * 12); // Ajustez la valeur 10 selon votre préférence de sensibilité
            }}
        >
            <section className={styles.headerTitle}>
                <img className={styles.imgPortrait} src={photo} alt="Portrait" />
                <Link to="/a-propos" onClick={(e) => e.stopPropagation()}>
                    <button>En savoir plus</button></Link>
                {/* <Link to="/a-propos" onClick={(e) => e.stopPropagation()}>En savoir plus</Link> */}

            </section>
            <section className={styles.title}>
                <h1>Anthony Becque</h1>
                <h2 className={styles.subtitle}>Développeur Javascript</h2>
            </section>
            <h2 className="mt20">Technologies</h2>
            <p className={styles.description}>Voici une liste des technologies que j'utilise lors de la réalisation de mes projets</p>
            <section className={styles.skills}>

                <article className={styles.type}>

                    <h3 className={styles.typeTitle}>Front-End</h3>
                    <div className="line"></div>
                    <ul className={styles.logo}>
                        {/* <div className={styles.image}><img src={html} alt="Logo html" className={styles.html} /></div>
                        <div className={styles.image}><img src={css} alt="Logo css" /></div>
                        <div className={styles.image}><img src={js} alt="Logo javascript" /></div>
                        <div className={styles.image}><img src={react} alt="Logo reactJs" /></div> */}
                        <li className={`${styles.containerLogo} mb10`}>
                            <i className="fa-brands fa-html5"></i>
                            <p>Html</p>
                        </li>
                        <li className={`${styles.containerLogo} mb10`}>
                            <i className="fa-brands fa-css3-alt"></i>
                            <p>Css</p>
                        </li>
                        <li className={`${styles.containerLogo} mb10`}>
                            <i className="fa-brands fa-sass"></i>
                            <p>Sass</p>
                        </li>
                        <li className={`${styles.containerLogo} mb10`}>
                            <i className="fa-brands fa-js"></i>
                            <p>Javascript</p>
                        </li>
                        <li className={`${styles.containerLogo} mb10`}>
                            <i className="fa-brands fa-react"></i>
                            <p>ReactJs</p>
                        </li>
                        <li className={`${styles.containerLogo} mb10`}>
                            <i className="fa-brands fa-bootstrap"></i>
                            <p>Bootstrap</p>
                        </li>
                        <li className={`${styles.containerLogo} mb10`}>
                            <img src={framer} alt="" style={{ width: "25px" }} />
                            <p>Framer-Motion</p>
                        </li>
                    </ul>
                </article>
                <article className={styles.type}>
                    <div className="mb20">
                        <h3 className={styles.typeTitle}>Back-end</h3>
                        <div className="line"></div>
                        <ul className={styles.logo}>
                            <li className={`${styles.containerLogo}`}>
                                <i className="fa-brands fa-node"></i>
                                <p>NodeJs</p>
                            </li>
                            <li className={styles.containerLogo}>
                                <i className="fa-solid fa-database"></i>
                                <p>MySql</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.typeTitle}>Autre</h3>
                        <div className="line"></div>
                        <ul className={styles.logo}>
                            <li className={styles.containerLogo}>
                                <i class="fa-brands fa-github"></i>
                                <p>GitHub</p>
                            </li>
                        </ul>
                    </div>




                </article>
            </section>

        </motion.div >
    );
};
export default Card;;