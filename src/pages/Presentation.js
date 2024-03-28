import Lottie from "react-lottie";
import Animation from "../assets/Animation.json";
import Title from "../components/Title";
import Card from "../components/Card";

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
        <section className="d-flex align-items-center justify-content-evenly">

            <article>
                <Title title="Bienvenue" />
                <Card />
            </article>
            {/* <article>
                <Lottie options={defaultOptions} height={600} width={400} />
            </article> */}
        </section>

    );
};
export default Presentation;