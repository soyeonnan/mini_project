import { useLocation } from "react-router-dom";
import Time from "../../components/Time";


function Timer (){
  const timeShow = useLocation();
  const { state } = timeShow

  console.log(state)

  return(
    <>
    {
      timeShow.pathname === '/start/timer' ?
      <Time/>
      :
      ''
    }
      
    
    </>
  )
}

export default Timer;