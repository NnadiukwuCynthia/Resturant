import Hero from "./components/Hero";
import { FaFacebookF } from "react-icons/fa6";
import {  IoLogoInstagram } from "react-icons/io5";

const App = () => {

  return (
    
    <div className="app">
      <Hero/>  
      <img src="../logo.avif" alt="" className="app__logo"/>
      <div className="app__iconContainer">
          <FaFacebookF className="app__iconContainer__icon"/>
          <IoLogoInstagram className="app__iconContainer__icon"/>
      </div>
      <hr />
      <div className="app__footer">
        <p className="app__footer__text">Created by <a href="#" className="name"><span >Nnadiukwu Cynthia</span></a> </p>
      </div>
     </div>
    
  )
}

export default App
