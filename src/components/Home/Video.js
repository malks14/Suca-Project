import pruebavideo from '../../assets/Video/Fondo/pruebavideo.mp4';
import styles from './Video.module.css'

const Video = () => {
    console.log(pruebavideo)
    return (
        <video className={styles.video} autoPlay loop muted id='video'>
            <source src={pruebavideo} type='video/mp4'/>
        </video>
    )
}

export default Video;