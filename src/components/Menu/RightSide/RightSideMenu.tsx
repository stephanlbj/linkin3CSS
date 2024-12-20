import styles from "./RightSideMenu.module.css"
import { BiSolidGrid, MdOutlineWorkspacePremium} from "../../../icons"
const RightSideMenu = () => {
  return (
    <div className={styles.RightWrapper}>
        <BiSolidGrid className="IconLayout" role="link" aria-label="For business"/>
        <MdOutlineWorkspacePremium className="IconLayout" role="link" aria-label="try premium"/>
    </div>
  )
}

export default RightSideMenu