import styles from "./ProjectCard.module.scss";
import { motion, useAnimation } from 'framer-motion';
import { useState } from "react";
import { Link } from 'react-router-dom';
const ProjectCard = ({ photo, video, title, stack, link, git, description }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (

        <motion.section
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTap={() => setIsHovered(!isHovered)}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={styles.container}>
            <div>
                {photo != null && <img src={photo} />}
                {video != null &&
                    <video id="video" autoPlay loop muted controls>
                        <source src={video} type="video/mp4" />
                    </video>}
                <p>{title}</p>
            </div>

            <motion.div
                className={styles.hidden}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.92 }}
                transition={{ duration: 0.5 }}>
                <article>
                    <p className={styles.description}>{description}</p>
                    <div className="line"></div>
                    {/* <p className={styles.description}>Technologies utilisées</p> */}
                    <ul className={styles.stack}>
                        {stack.map((oneStack, index) => (
                            <li key={index}>{oneStack}</li>
                        ))}
                    </ul>
                </article>

                <motion.div
                    className={styles.link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 100 : 0 }}
                    transition={{ duration: 0.5 }}>
                    <section>
                        <Link target="_blank" to={git}>
                            <button>
                                <i className="fa-brands fa-github"></i>
                                GitHub
                            </button>
                        </Link>
                    </section>
                    {link != null &&
                        <section>
                            <Link target="_blank" to={link}>
                                <button>
                                    <i className="fa-solid fa-link"></i> Lien
                                </button>
                            </Link>
                        </section>}
                </motion.div>
            </motion.div>

        </motion.section>

    );
};
export default ProjectCard;