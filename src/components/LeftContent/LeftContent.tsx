import UserPhoto from "../UserPhoto/UserPhoto"
import styles from "./LeftContent.module.css"

const LeftContent = () => {
  return (
    <aside className={styles.SideContainer}>
     <div className={styles.UserDetail}>
     <UserPhoto  newClass={styles.Logo}/>
      <h2>James Steph</h2>
      <p>Software Developer React, Nextjs , NestJS , Typescript</p>
      <div className={styles.BottomDetails}>
           <div>
            <p>Profile viewers</p>
            <p>40</p>
          </div>
          <div>
            <p>Post impressions</p>
            <p>79</p>
          </div>
      </div>
      </div>
    </aside>
  )
}

export default LeftContent