import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './route/AppRouter'
import Header from './components/Header'



function App() {


  return (
    <>
  
      <BrowserRouter>
      <Header/>  
      <AppRouter/>
      </BrowserRouter>


    </>
  )
}

export default App
