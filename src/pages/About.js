import Title from "../components/Title";
import styles from "./About.module.scss";
import cv from "../assets/doc/Cv_Abecque.pdf";

const About = () => {
    const handleDownload = () => {
        // Crée un lien vers le fichier à télécharger
        const downloadLink = document.createElement('a');
        downloadLink.href = cv;
        downloadLink.setAttribute('download', "CV_A_Becque.pdf");

        // Simulation d'un clic sur le lien pour déclencher le téléchargement
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <>
            <Title title="A Propos" />
            <section className={styles.sectionAbout}>
                <p>Après 10 ans de travail dans les ressources humaines et la formation, j'ai choisi de me reconvertir en tant que développeur web et web mobile.
                    Ce qui m'a conduit à choisir le dévelopement web est la curiosité, j'aime essayer de comprendre le fonctionnement des choses
                    Mes expériences passées m'ont donné les capacités de chercher des solutions pour mes clients.</p>
                <p>J'allie donc mes capacités techniques et relationnelles pour trouver la solution innovante ! </p>
            </section>
            <button className={styles.btn} onClick={handleDownload}>Télécharger mon CV</button>
        </>
    );
};
export default About;