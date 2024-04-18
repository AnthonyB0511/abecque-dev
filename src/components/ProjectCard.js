import styles from "./ProjectCard.module.scss";
import { motion } from 'framer-motion';
import { useState } from "react";
import { Link } from 'react-router-dom';

const ProjectCard = ({ photo, video, title, stack, link, git, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            className={styles.container}
            onClick={handleCardClick}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div

                style={{ display: isFlipped ? 'none' : 'flex' }}
                className={styles.cardFront}
            >
                {photo && <img src={photo} alt={title} />}
                {video && (
                    <video id="video" autoPlay loop muted >
                        <source src={video} type="video/mp4" />
                    </video>
                )}
                <h2 className="mt20 mb10">{title}</h2>
            </motion.div>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: isFlipped ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: isFlipped ? 'flex' : 'none' }}
                className={styles.cardBack} >
                <div>


                </div>
                <p className={styles.description}>{description}</p>
                <div className="line"></div>
                <p> Technologies utilisées</p>
                <ul className={styles.stack}>
                    {stack.map((oneStack, index) => (
                        <li key={index}>{oneStack}</li>
                    ))}
                </ul>
                <div className={styles.links}>
                    <Link target="_blank" to={git}>
                        <button>
                            <i className="fa-brands fa-github"></i>
                            GitHub
                        </button>
                    </Link>
                    {link && (
                        <Link target="_blank" to={link}>
                            <button>
                                <i className="fa-solid fa-link"></i> Lien
                            </button>
                        </Link>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
