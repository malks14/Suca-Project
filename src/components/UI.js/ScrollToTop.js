import { useEffect, useState } from "react";

import styles from './ScrollToTop.module.css'


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    },[]);

    return (
        <div className={styles['scroll-to-top']}>
           { isVisible &&
            <div  onClick={scrollToTop}>
                <i class="fas fa-arrow-up fa-2x"></i>
            </div>
           }
        </div>
    )
};

export default ScrollToTop;