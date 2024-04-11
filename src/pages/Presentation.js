import Lottie from "react-lottie";
import Animation from "../assets/Animation.json";
import Title from "../components/Title";
import Card from "../components/Card";
import styles from './Presentation.module.scss';
import { Helmet } from "react-helmet";

const Presentation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <Helmet>
                <title>Accueil | ABecque</title>
                <meta name="description" content="Accueil du site ABecque" />
            </Helmet>
            <section className={`${styles.container}d-flex align-items-center justify-content-evenly my30`}>

                <article>
                    <Title title="Bienvenue" />
                    <Card />
                </article>
                {/* <article className={styles.article}>
                <Lottie options={defaultOptions} height={600} width={400} />
            </article> */}
            </section>
        </>

    );
};
export default Presentation;