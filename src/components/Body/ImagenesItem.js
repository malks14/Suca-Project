import React from "react";
import ImagenesBody from "../Helper/ImagenesBody";
import styles from "./ImagenesItem.module.css";
import "animate.css";




const ImagenesItem = (props) => {



    return (
        <React.Fragment>
           
            <div  className={`${styles.divcont}`}>
                    { ImagenesBody.map(
                    (imgSrc, index) => {
                     return (
                            <img className={` ${styles.imgbody}`}
                            src={imgSrc.src} 
                            key={index} 
                            onClick={props.onShowModal}
                            alt='Imagenes Suca'/>
                        )
        }

    )}
                    
            </div>
            
        </React.Fragment>
    )
};

export default ImagenesItem;
