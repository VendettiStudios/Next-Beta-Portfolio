import styles from './about.module.css'

type Props = {}

const About = (props: Props) => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.overlay}></div>
            <div className={styles.aboutContent}>
                <div className={styles.card}>
                    <h3 className={styles.about}>ABOUT</h3>
                    <div className={styles.content}>
                        <p> I am a full-stack engineer with an eye for design. I consider myself a jack-of-all-trades, handling projects from design to deployment - and helping debug problem points. <br />My world travels have led me to a deep appreciation for the expression of diversity via design. I am most enthusiastic about front-end development because I enjoy challenges and how many directions you can take UX / UI. Though I highly appreciate the black-and-white nature and straightforwardness of back-end development.
                        </p>
                    </div></div>
            </div>

            <div className={styles.ocean}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>
        </div>
    );
};

export default About