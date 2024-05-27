import { useState } from 'react'
import Profile from './profileComponent'
import MainContent from './mainContent'
import logo from "./assets/logo.png"
import './css/header.css'


const App = () => {
  const[lineRight, setLineRight] = useState();
  const[lineWdth, setLineWdth] = useState();

  const headerClick = (r, w) => {
    setLineRight(r);
    setLineWdth(w);
  }

  const Home = () => {
    return (
        <div className="mainContent">
          <div className='Home'>
              <h1>HI I'M JOHN MARC BASBAS</h1>
              <h4>A student web developer, programmer and editor and this is my developer portfolio</h4>
              <input type="button" value="About Me" onClick={() => {document.getElementById('webHeader').offsetWidth <= 350 ? headerClick(121, 42) : headerClick(182, 52)}} />
          </div>
        </div>
    )
  } 

  return (
    <div className='app'>
      <header className='webHeader' id='webHeader'>
        <img src={logo} alt="" />
        <ul>
          <li><a onClick={() => {document.getElementById('webHeader').offsetWidth <= 350 ? headerClick(165, 38) : headerClick(256, 48)}}>Home</a></li>
          <li><a onClick={() => {document.getElementById('webHeader').offsetWidth <= 350 ? headerClick(121, 42) : headerClick(182, 52)}}>About</a></li>
          <li><a onClick={() => {document.getElementById('webHeader').offsetWidth <= 350 ? headerClick(68, 50) : headerClick(99, 63)}}>Projects</a></li>
          <li><a onClick={() => {document.getElementById('webHeader').offsetWidth <= 350 ? headerClick(16, 47) : headerClick(16, 60)}}>Contact</a></li>
          <hr id="underline"style={{width: lineWdth, right: lineRight}}/>
        </ul>
      </header>
      <div className='webBody'>
        {lineRight != 16 && <Profile/>}
        {lineRight != 256 && lineRight != 165 && lineRight != null && <MainContent clicked = {lineRight}/>}
        {lineRight == null ? <Home/> : lineRight == 165 ? <Home/>: lineRight == 256 && <Home/>}
      </div>
    </div>  
  )
}


export default App
