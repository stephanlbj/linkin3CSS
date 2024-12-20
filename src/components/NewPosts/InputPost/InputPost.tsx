import styles from "./InputPost.module.css"
import classNames from "classnames"

type InputPostProps ={
  placeHolder:string
  customClass?:string
}

const InputPost = ({placeHolder, customClass}: InputPostProps) => {
  return (
    <input placeholder={placeHolder} className={classNames(styles.InputWrapper, customClass)}/>
  )
}

export default InputPost