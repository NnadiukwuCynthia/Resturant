import { FaFacebookF } from "react-icons/fa6";
import {  IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footerContainer">
        <img src="../logo.avif" alt="" className="footerContainer__logo"/>
      <div className="footerContainer__iconContainer">
          <FaFacebookF className="footerContainer__iconContainer__icon"/>
          <IoLogoInstagram className="footerContainer__iconContainer__icon"/>
      </div>
      <hr />
      <div className="footerContainer__footer">
        <p className="footerContainer__footer__text">Created by <a href="#" className="name"><span >Nnadiukwu Cynthia</span></a> </p>
      </div>
    </div>
  )
}

export default Footer