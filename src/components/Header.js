import styles from "./Header.module.scss";
import logo from '../assets/img/logo3.png';
const Header = () => {
    return (
        <>
            <section className={`${styles.header}`}>
                <div className={`${styles.headerName}`}>
                    <img src={logo} alt="Logo du site" />
                </div>
                <nav>
                    <ul className={`${styles.headerNav} d-flex`}>
                        <li className="mx20">Formations</li>
                        <li className="mx20">Parcours / Projets</li>
                        <li className="mx20">Contact</li>
                    </ul>
                </nav>
                <nav>
                    <ul className={`${styles.headerContact} d-flex`}>
                        <li className="mx20"><i className="fa-brands fa-linkedin i"></i></li>
                        <li className="mx20"><i className="fa-solid fa-envelope"></i></li>
                        <li className="mx20"><i className="fa-brands fa-github"></i></li>
                    </ul>
                </nav>
            </section>

        </>
    );
};
export default Header;