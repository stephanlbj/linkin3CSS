import LefSideMenu from "../Menu/LeftSide/LefSideMenu"
import Menu from "../Menu/Menu"
import RightSideMenu from "../Menu/RightSide/RightSideMenu"
import styles from "./Header.module.css"
 
const Header = () => {
  return (
     <header className={styles.Container}>
        <div className={styles.Wrapper}>
        <LefSideMenu/>
         <nav className={styles.Menu}>
         <Menu/>
         <RightSideMenu/>
         </nav>
        </div>
       </header>
  )
}

export default Header