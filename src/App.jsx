import Layout from './Components/Layout'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path = '/:slug' element = {<Detail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
