import { useState } from "react";
import styles from "./HeaderMobile.module.scss";
const HeaderMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };
    return (
        <section className={styles.menu} onClick={toggleMenu}>
            <div className={`${styles.bar} ${styles.bar1} ${menuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.bar} ${styles.bar2} ${menuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.bar} ${styles.bar3} ${menuOpen ? styles.open : ''}`}></div>
        </section >
    );
};

export default HeaderMobile;