
import styles from './Video.module.css'

const Video = () => {
    const pruebavideo = 'https://res.cloudinary.com/dfjpoucxs/video/upload/v1637504890/Suca/SELECCION_INICIO_11_hfwexl.mp4'
    return (
        <video className={styles.video} autoPlay loop muted id='video'>
            <source src={pruebavideo} type='video/mp4'/>
        </video>
    )
}

export default Video;