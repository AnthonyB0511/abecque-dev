import Lottie from "react-lottie";
import Animation from "../assets/Animation.json";
import style from "./Presentation.module.scss";

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
                <h1 className={`${style.title}`}>Bienvenue</h1>
                <div>
                    Je conçois des applications web engageantes. Si vous avez une idée il est temps de les mettre en oeuvre</div>
            </article>
            <article>
                <Lottie options={defaultOptions} height={600} width={400} />
            </article>
        </section>

    );
};
export default Presentation;