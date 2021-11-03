
import styles from './Navigation.module.css'



 
const Navigation = () => {
  
  
  
    return (
      <nav className={styles.nav}>
        <ul>

            <li>
              <a href="/" >photos</a>
            </li>
          
        </ul>
      </nav>
    );
  };
  
  export default Navigation;

  // onBackClick={handleContactClick}