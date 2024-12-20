import styles from "./LefSideMenu.module.css"
import InputSearch from "../../InputSearch/InputSearch"
import {FaLinkedin} from "../../../icons"
const LefSideMenu = () => {
  return (
    <div className={styles.Wrapper}>
        <button aria-label="Go home">
        <FaLinkedin className={`IconLayout ${styles.Logo}`}/>
        </button>
         <InputSearch/>
    </div>
  )
}

export default LefSideMenu