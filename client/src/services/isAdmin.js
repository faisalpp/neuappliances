
import {useSelector} from 'react-redux'


const isAdmin = () => {
    const admin = useSelector((state)=>state.admin._id)
    const user = useSelector((state)=>state.user._id)
  if(admin){
    return true
  }
  if(user && !admin ){
    return false
  }
  if(!admin && !user){
    return false
  }
}

export default isAdmin