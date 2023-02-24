'use client'
import { motion } from 'framer-motion';
import styles from './backgroundCircles.module.css'

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{
            duration:2.5,
        }}
        className ={styles.backgroundCircles}>
            <div className={`${styles.circleA} animate-ping`}/>
            <div className={styles.circleB} />
            <div className={`${styles.circleC} animate-pulse`} />
            <div className={`${styles.circleD} animate-pulse`}/>
            <div className={styles.circleF} />
        </motion.div>
    )
}

export default BackgroundCircles