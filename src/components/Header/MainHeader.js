import Navigation from "./Navigation";
import styles from './MainHeader.module.css';
import Contact from "./Contact";

const MainHeader = (props) => {
    return (
        <header className={styles['main-header']}>
            <Navigation />
            <h1>suca</h1>
            <Contact />
        </header>
    )
}

export default MainHeader;