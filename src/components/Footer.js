import styles from "./Footer.module.scss";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Anthony Becque</p>
            <p>Solutions Web</p>
            <nav>
                <ul className={`d-flex`}>
                    <li className="mx20"><i className="fa-brands fa-linkedin i"></i></li>
                    <li className="mx20"><i className="fa-solid fa-envelope"></i></li>
                    <li className="mx20"><i className="fa-brands fa-github"></i></li>
                </ul>
            </nav>

        </footer>
    );
};
export default Footer;