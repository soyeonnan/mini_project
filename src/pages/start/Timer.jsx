import { useLocation } from "react-router-dom";
import Time from "../../components/Time";



function Timer (){
  //여기에 아까 보낸 state:time의 time이 들어있음(경로 보내면서 같이 보냄)
  // 이해 안 됨
  const timeShow = useLocation();
  const { state } = timeShow

  console.log(state)

  return(
    <>

      

      {
        timeShow.pathname === '/start/timer' ?
        <Time timeShow={state}/>
        :
        ''
      }
      
    
    </>
  )
}

export default Timer;