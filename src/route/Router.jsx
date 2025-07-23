import { Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import Main from "../pages/Main";

function Router ( ){
  return(
    <Routes>
      <Route path="/" element={<Intro/>} />
      <Route path="/main" element={<Main/>} />
    </Routes>
  )
}

export default Router;