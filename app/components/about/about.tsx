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
                        <p> I am a skilled full-stack engineer with a keen eye for design. I enjoy working on projects that require a range of skills, from the initial design stages to deployment and debugging. My diverse skillset allows me to tackle complex development projects with ease, including front-end and back-end development.
                            <br />
                            Through my travels, I&apos;ve gained a deep appreciation for the unique expression of diversity in design. I&apos;m particularly drawn to the creative and challenging aspects of front-end development, as it offers endless opportunities to explore the intersection of user experience and user interface. While back-end development is often more straightforward, I appreciate its precision and logical structure.
                            <br />
                            I take pride in my ability to adapt to new technologies and challenges, and I&apos;m always seeking out new directions to grow and learn in my work. I believe my broad skillset and passion for design make me a valuable addition to any development team.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.ocean}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>
        </div>
    );
};

export default About