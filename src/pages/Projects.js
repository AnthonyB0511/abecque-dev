import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.scss";
import gommes from "../assets/img/gommes_1.webp";
import atwi from "../assets/video/atwi.mp4";

const Projects = () => {
    return (
        <>
            <Title title="Mes projets" />
            <section className={styles.projects}>
                <ProjectCard
                    photo={gommes}
                    title="Les dés Gommés"
                    git="https://github.com/AnthonyB0511/les-des-gommes"
                    link="https://les-des-gommes.fr/"
                    description="Réalisation pour une association avec espace d'échanges pour les utilisateurs et avec espace de administrateur"
                    stack={["React", "Sass", "NodeJs", "Express", "Cloudinary", "Multer", "MySql"]} />
                <ProjectCard
                    title="And the winner is ..."
                    git="https://github.com/AnthonyB0511/atwi"
                    description="And the winner is - Application permettant de réaliser un décompte de points"
                    stack={["ReactNative", "Expo"]}
                    video={atwi}
                />
            </section>

        </>


    );
};
export default Projects;