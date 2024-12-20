import CusttomButton from "../CustomButton/CusttomButton"
import UserPhoto from "../UserPhoto/UserPhoto"
import styles from "./RightContent.module.css"

const RightContent = () => {
  return (
    <aside className={styles.RightContainer}>
      <h3>Add to your feed</h3>
      <div>
      <div>
      <UserPhoto newClass={styles.UserLayout}/> 
       <div>
       <h3>Kim</h3>
       <p>Lead Tech Talent Acquisition James Entreprise🚀</p>
       <CusttomButton title="Follow" customClass={styles.CustomBtn}  />
       </div>
      </div>
      <div>
      <UserPhoto newClass={styles.UserLayout}/> 
      <div>
      <h3>Lee Wu</h3>
       <p>Software Developer React, Nextjs , NestJS , Typescript🚀</p>
       <CusttomButton title="Follow" customClass={styles.CustomBtn}/>
      </div>
      </div>
      </div>
    </aside>
  )
}

export default RightContent


 