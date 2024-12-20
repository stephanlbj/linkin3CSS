import CusttomButton from "../CustomButton/CusttomButton"
import UserPhoto from "../UserPhoto/UserPhoto"
import InputPost from "./InputPost/InputPost"
import styles from "./NewPosts.module.css"

function NewPosts() {
  return (
    <section className={styles.Wrapper}>
      <div>
        <UserPhoto newClass={styles.UserLayout}/>
        <InputPost placeHolder="Start a post, try writing with AI"/>
      </div>
      <div>
        <CusttomButton title="Media"/>
        <CusttomButton title="Expertise"/>
        <CusttomButton title="Article"/>
      </div>
    </section>
  )
}

export default NewPosts