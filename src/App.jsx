import { BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import AppRouter from './route/AppRouter'
import Header from './components/Header'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';


function App() {
  const location = useLocation();
  console.log(location)
  const arr = ['/', '/main'];

  return (
    <>
      {
        location.pathname === '/' ?
        ''
        :
        <Header/>
      }
      
     
      <AppRouter/>


    </>
  )
}

export default App
