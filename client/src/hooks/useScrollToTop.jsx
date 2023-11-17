import {useEffect} from 'react'
s
const useScrollToTop = ({history}) => {
  
  useEffect(()=>{
   const unlisten = history.listen(() => {
    window.scrollTo(0,0);
   });
   return () => {
    unlisten();
   }
  },[])
  
    return (null)
}

export default useScrollToTop