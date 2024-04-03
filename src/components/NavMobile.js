import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./NavMobile.module.scss";

const NavMobile = ({ menuOpen, setMenuOpen }) => {

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.section
                    className={styles.navMobile}
                    initial={{ x: '100%' }}
                    animate={{ x: menuOpen ? 0 : '100%', visibility: menuOpen ? "visible" : "hidden" }}
                    transition={{ type: 'spring', stiffness: 120, duration: 0.5 }}
                    exit={{ x: menuOpen ? '100%' : 0 }}
                    style={{ overflow: 'hidden' }}>
                    <nav>
                        <ul>
                            <li><Link onClick={() => setMenuOpen(!menuOpen)} to="/">Accueil</Link></li>
                            <li><Link onClick={() => setMenuOpen(!menuOpen)} to="/projets">Projets</Link></li>
                            <li><Link onClick={() => setMenuOpen(!menuOpen)} to="/a-propos">A propos</Link></li>
                            <li><Link onClick={() => setMenuOpen(!menuOpen)} to="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                </motion.section>
            )}
        </AnimatePresence>
    );
};
export default NavMobile; 