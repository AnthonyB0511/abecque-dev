import { useState } from "react";
import styles from "./HeaderMobile.module.scss";
import NavMobile from "./NavMobile";
import { AnimatePresence } from "framer-motion";
const HeaderMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <section className={styles.menu} onClick={toggleMenu}>
                <div className={`${styles.bar} ${styles.bar1} ${menuOpen ? styles.open : ''}`}></div>
                <div className={`${styles.bar} ${styles.bar2} ${menuOpen ? styles.open : ''}`}></div>
                <div className={`${styles.bar} ${styles.bar3} ${menuOpen ? styles.open : ''}`}></div>
            </section >
            <AnimatePresence>
                {menuOpen && <NavMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            </AnimatePresence>

        </>
    );
};

export default HeaderMobile;