import classNames from "classnames"
import styles from "./CustomButton.module.css"


type CusttomButtonProps ={
    title: string 
    customClass?:string
}
const CusttomButton = ({title, customClass}:CusttomButtonProps) => {
  return (
    <button className={classNames(styles.BtnWrapper, customClass)}>
      {title}
    </button>
  )
}

export default CusttomButton