
import Asset1 from '../../assets/Imagenes/Contacto/Asset1.png';
import styles from './Contacto.module.css';





const Contacto = () => {

    

    return (
        <div id='contact' className={styles.container}>
                <div className={styles.containerpara}>
                    <h2 className={styles.contact}>contact</h2>
                    <p className={styles.phd}>Photographer <span className={styles.low}>& Director</span></p>
                    <div className={styles.divlow}>
                        <p><a href="mailto:andysucari@hotmail.com?Subject=Consultas">andysucari@hotmail.com</a></p>
                        <div>
                            <a href="http://web.whatsapp.com/send?phone=+5491151088995">11-5108-8995</a>
                            <span className={styles.whi}> / / </span>
                            <a href="https://instagram.com/andysucari?utm_medium=copy_link">ig</a>
                        </div>
                        
                    </div>
                    
                </div>
                <img className={styles.image} src={Asset1} alt='Imagen contacto'></img>
       
        </div>
    )
};

export default Contacto;