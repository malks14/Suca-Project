import React, {useState} from "react";
import ImagenesItem from "./ImagenesItem";
import "animate.css";

import PhotoModal from "./PhotoModal";

console.log(ImagenesItem.src)
const Imagenes = (src) => {
    
    
    
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        
        setShowModal(true)
    };

    const hideModalHandler = () => {
        setShowModal(false)
    };


    return (
        <React.Fragment>
            {showModal && <PhotoModal onClose={hideModalHandler}></PhotoModal>}
            <ImagenesItem onShowModal={showModalHandler}/>
        </React.Fragment>
    )
};

export default Imagenes;


//     const handleContactClick = () => {
//       divRef.scrollIntoView({ behavior: 'smooth' })
//   } 
    // let animado = document.querySelectorAll('.animacion');
    // const mostrarScroll = () => {
    //     let scrollTop = document.documentElement.scrollTop;
    //     for (let i=0; i < animado.length; i++) {
    //         let alturaAnimado = animado[i].offsetTop;
    //         if(alturaAnimado - 500 < scrollTop) {
    //             animado[i].style.opacity = 1;
    //         }
    //     }
    // }

    // ${styles.animacion}
    
    // window.addEventListener('scroll', mostrarScroll);



    // console.log(ImagenesBody)
// export default class Imagenes extends React.Component {
    
//     state = { isOpen: false };

    
//     handleShowDialog = () => {
//         this.setState({ isOpen: !this.state.isOpen });
//       };

//       render() {
//         return (
//           <div className={styles.divcont}>
//             <img
//               className={styles.imgbody}
//               src={ImagenesBody[0].src}
//               onClick={this.handleShowDialog}
              
//             />
//             {this.state.isOpen && (
//               <dialog
//                 className="dialog"
//                 style={{ position: "absolute" }}
//                 open
//                 onClick={this.handleShowDialog}
//               >
//                 <img
//                   className="image"
//                   src={ImagenesBody[0].src}
//                   onClick={this.handleShowDialog}
                  
//                 />
//               </dialog>
//             )}
//           </div>
//         );
//       }


// }