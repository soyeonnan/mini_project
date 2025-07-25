import { Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import Main from "../pages/Main";
import Routine from "../pages/Routine.jsx";
import History from "../pages/History";
import Start from "../pages/Start";
import Beginner from "../pages/routine/Beginner";
import Intermediate from "../pages/routine/Intermediate";
import Advanced from "../pages/routine/Advanced";
import Timer from "../pages/start/Timer";
import Setting from "../pages/start/Setting";


function AppRouter ( ){
  return(
    <Routes>
      <Route path="/" element={<Intro/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/history" element={<History/>} />

      <Route path="/start" element={<Start/>} >
        <Route path="timer" element={<Timer/>}></Route>
        <Route path="setting" element={<Setting/>}></Route>
      </Route>

      <Route path="/routine" element={<Routine/>} >
      
        <Route path="beginner" element={<Beginner/>} />
        <Route path="intermediate" element={<Intermediate/>} />
        <Route path="advanced" element={<Advanced/>} />

      </Route>
    

      <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
    </Routes>
  )
}

export default AppRouter;