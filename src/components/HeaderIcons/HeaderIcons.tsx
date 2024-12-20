import styles from './HeaderIcons.module.css'
import {MdDynamicFeed, FaEdit,AiFillMessage} from "../../icons"
const HeaderIcons = () => {
  return (
    <div className={styles.IconsWrapper}>
        <MdDynamicFeed className="IconLayout"/>
        <FaEdit className="IconLayout"/>
        <AiFillMessage className='IconLayout'/>
        
    </div>
  )
}

export default HeaderIcons