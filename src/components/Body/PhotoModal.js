import { Fragment } from 'react';



import styles from './PhotoModal.module.css'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = (props) => {
   

    return <div className={styles.modal}>
        <div className={styles.content} onClick={props.onClose}>{props.children}</div>
    </div>
};


const PhotoModal = (props) => {
   
    return (
        <Fragment>
            <Backdrop onClose={props.onClose}/>
            <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>
        </Fragment>
    )

};

export default PhotoModal;