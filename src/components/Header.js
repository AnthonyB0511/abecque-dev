import styles from "./Header.module.scss";
import logo from '../assets/img/logo3.png';
import { NavLink, Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <section className={`${styles.header}`}>
                <div className={`${styles.headerName}`}>
                    <Link to="/">
                        <img src={logo} alt="Logo du site" />
                    </Link>

                </div>
                <nav>
                    <ul className={`${styles.headerNav} d-flex`}>
                        <li className="mx20">
                            <NavLink to="projets" activeClassName="active">Projets</NavLink></li>
                        <li className="mx20">
                            <NavLink to="a-propos" activeClassName="active">A propos</NavLink>
                        </li>
                        <li className="mx20">
                            <NavLink to="contact" activeClassName="active">Contact</NavLink>
                        </li>
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