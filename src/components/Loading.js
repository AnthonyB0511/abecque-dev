import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <section className={`${styles.loading}`}>
            <i className={`fas fa-spinner ${styles.spinner}`}></i>
        </section>
    );
};
export default Loading;