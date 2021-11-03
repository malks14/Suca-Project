
import styles from './Video.module.css'

const Video = () => {
    const pruebavideo = 'https://res.cloudinary.com/malks14/video/upload/v1635960035/Suca/pruebavideo_volpac.mp4'
    return (
        <video className={styles.video} autoPlay loop muted id='video'>
            <source src={pruebavideo} type='video/mp4'/>
        </video>
    )
}

export default Video;