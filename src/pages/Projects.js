import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.scss";
import gommes from "../assets/img/gommes_1.webp";
import atwi from "../assets/video/atwi.mp4";
import wildlands from "../assets/img/Wildlands.webp";
import { Helmet } from "react-helmet";

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Projets | ABecque</title>
                <meta name="description" content="Projets de ABecque" />
            </Helmet>
            <Title title="Mes projets" />
            <section className={styles.projects}>
                <ProjectCard
                    photo={gommes}
                    title="Les dés Gommés"
                    git="https://github.com/AnthonyB0511/les-des-gommes"
                    link="https://les-des-gommes.fr/"
                    description="Réalisation pour une association avec espace d'échanges pour les utilisateurs et avec espace administrateur"
                    stack={["React", "Sass", "NodeJs", "Express", "Cloudinary", "Multer", "MySql"]} />
                <ProjectCard
                    title="And the winner is ..."
                    git="https://github.com/AnthonyB0511/atwi"
                    description="And the winner is - Application permettant de réaliser un décompte de points"
                    stack={["ReactNative", "Expo"]}
                    video={atwi}
                />
                <ProjectCard
                    title="Wildlands"
                    git="https://github.com/AnthonyB0511/Wildlands-TS"
                    description="Wildlands -refonte d'un projet réalisé en groupe avec React, Typescript et Vite"
                    stack={["React, Typescript, Vite"]}
                    link="https://wildlands-ts.vercel.app/"
                    photo={wildlands} />
            </section>

        </>


    );
};
export default Projects;