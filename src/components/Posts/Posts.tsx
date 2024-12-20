import CusttomButton from "../CustomButton/CusttomButton"
import InputPost from "../NewPosts/InputPost/InputPost"
import UserPhoto from "../UserPhoto/UserPhoto"
import styles from "./Posts.module.css"

type PostsProps ={
  imageSrc?:string
  description?: string
  userName:string
}

const Posts = ({imageSrc, description, userName}:PostsProps) => {
  return (
    <section className={styles.MiddleWrapper}>
       <div>
          <div role="link" aria-label="view user profile">
          <UserPhoto newClass={styles.UserLayout}/> 
          {userName && <p>{userName}</p>}
          </div>

          <button>Follow</button>
          <button>Unfollow</button>
       </div>
       <div tabIndex={0}>
      {description && <p >{description}</p>  }
      
       </div> 
       {imageSrc && <div className={styles.PostImage}>
        <img
        src={`./${imageSrc}`}
        className={styles.ImageLayout}
        alt="Post Image"
        loading="eager"
        />
       </div>}
     
    
      <div className={styles.Buttons}>
       <CusttomButton title="Like"/>
       <CusttomButton title="Comment"/>
       <CusttomButton title="Repost"/>
       <CusttomButton title="Send"/>
       </div>
      <div className={styles.CommentWrapper}>
       <InputPost placeHolder="Enter comment" customClass={styles.CustomInputLayout} />
      </div>
    </section>
  )
}

export default Posts