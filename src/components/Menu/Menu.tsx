import styles from "./Menu.module.css"
import {HiUsers, BsFillBriefcaseFill, HiHome,AiFillMessage, MdNotifications } from "../../icons"
import UserPhoto from "../UserPhoto/UserPhoto"
import { MenuItem } from "../../types";



const menuItems: MenuItem[] = [
  { label: "Home", icon: <HiHome className="IconLayout" /> },
  { label: "Network", icon: <HiUsers className="IconLayout" /> },
  { label: "Jobs", icon: <BsFillBriefcaseFill className="IconLayout" /> },
  { label: "Messages", icon: <AiFillMessage className="IconLayout" /> },
  { label: "Notifications", icon: <MdNotifications className="IconLayout" /> },
  { label: "Open profile menu", icon: <UserPhoto newClass="IconLayout" /> },
];

const Menu = () => {
  return (
    <div className={styles.Menu_Wrapper}>
      {menuItems.map((item, index) => (
        <button key={index} aria-label={item.label}>
          {item.icon}
        </button>
      ))}
    </div>
  )
}

export default Menu