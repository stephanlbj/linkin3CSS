import {FaUserCircle} from "../../icons"
import classNames from 'classnames';

type UserPhotoProps ={
  newClass?:string
}
const UserPhoto = ({newClass}:UserPhotoProps) => {
  return (
    <FaUserCircle className={classNames('IconLayout', newClass)} role="link" aria-label="Go to user profile"/>
  )
}

export default UserPhoto