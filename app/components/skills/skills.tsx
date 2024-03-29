import styles from './skills.module.css'


type Props = {}

const Skills = (props: Props) => {
    return (
        <div className={styles.skillsSection}>
            <div className="" id="skills">
                <span className={styles.head}>Skills & Expertise</span>
                <section className={styles.container1}>
                    <div className={styles.container_content}>
                        <div className={styles.row}>
                            <div className="row_md_12">
                                <div className={styles.timeline_centered}>
                                    <article className={styles.timeline_entry}>
                                        <div className={`${styles.timeline_icon} ${styles.timeline_icon_5}`} >
                                        </div>
                                        <div className={styles.label}>
                                            <h2>Full-Stack Web Development and Design</h2>
                                            <p>I have extensive experience with the MERN stack and consider it my primary framework for developing web applications. However, I&apos;m also proficient with various other frameworks and tools that are commonly used in the industry.</p>
                                        </div>
                                    </article>
                                    <article className={styles.timeline_entry}>
                                        <div className={styles.timeline_icon}>
                                        </div>
                                        <div className={styles.label}>
                                            <h2>Front End</h2>
                                            <p> Next.js, ReactJS, VanillaJS, Typescript, JavaScript, JQuery, HTML5, CSS, Bootstrap, JSON, React-Bootstrap, Bulma, Tailwind CSS, MUI, HeadlessUI, webpack.js</p>
                                        </div>
                                    </article>
                                    <article className={styles.timeline_entry}>
                                        <div className={`${styles.timeline_icon} ${styles.timeline_icon_2}`} >
                                        </div>
                                        <div className={styles.label}>
                                            <h2>BackEnd</h2>
                                            <p>MongoDB - Mongoose, SQL - Sequelize, Sanity.io, GraphQL, PostMan, Insmonia, Node.js, Express.js, MVC, State, Redux, DNS, API Integration - REST, Object-Oriented-Programming, Next.js, Authentication, webpack.js</p>
                                        </div>
                                    </article>
                                    <article>
                                        <div className={`${styles.timeline_icon} ${styles.timeline_icon_4}`} >
                                        </div>
                                        <div className={styles.label}>
                                            <h2>UX/UI Tools & Deployment Tools</h2>
                                            <p>Figma, Github, CloudFlare, Vercel, Heroku, EC2</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills