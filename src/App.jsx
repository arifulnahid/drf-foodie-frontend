import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'
import FooterComponent from './components/footer/Footer'


function App() {

  return (
    <>
        <RouterProvider router={router}/>
        <FooterComponent/>
    </>
  )
}

export default App
