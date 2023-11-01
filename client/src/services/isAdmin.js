
import {useSelector} from 'react-redux'


const isAdmin = () => {
    const admin = useSelector((state)=>state.admin._id)
    const user = useSelector((state)=>state.user._id)
  if(admin){
    return admin
  }
  if(user){
    return user
  }
  if(!admin && !user){
    return false
  }
}

export default isAdmin