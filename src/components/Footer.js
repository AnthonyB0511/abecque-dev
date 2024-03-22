import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.name}>©2024 Anthony BECQUE</p>

            <nav>
                <ul className={`d-flex`}>
                    <li className="mx20">
                        <Link target="_blank" to="https://www.linkedin.com/in/abecque/">
                            <i className="fa-brands fa-linkedin i"></i>
                        </Link>
                    </li>

                    <li className="mx20">
                        <Link to="mailto:becque.anthony@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </Link>
                    </li>

                    <li className="mx20">
                        <Link target="_blank" to="https://github.com/AnthonyB0511">
                            <i className="fa-brands fa-github"></i>
                        </Link>
                    </li>

                </ul>
            </nav>
            <p className={styles.mentions}>Mentions légales</p>

        </footer>
    );
};
export default Footer;