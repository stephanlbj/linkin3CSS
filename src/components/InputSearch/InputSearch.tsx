import styles from "./InputSearch.module.css"
import {MdOutlineSearch} from "../../icons"
import HeaderIcons from "../HeaderIcons/HeaderIcons"

const InputSearch = () => {
  return (

    <div className={styles.Container}>
        <div className={styles.InputWrapper}>
        <MdOutlineSearch className={styles.Search_icon}/>
        <input type="search" placeholder="Search" />
    </div>
    <HeaderIcons />
    </div>
   
  )
}

export default InputSearch