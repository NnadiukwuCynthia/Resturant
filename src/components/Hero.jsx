import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Imageslider from "./Imageslider";

const Hero = () => {
    const imageSlides = [
        { url: '../../img-1.jpg'},
        { url: '../../img-2.jpg'},
        { url: '../../img-3.jpg'},
        { url: '../../img-4.jpg'},
        { url: '../../img-5.jpg'},
        { url: '../../img-6.jpg'},
    ]    
    
  return (
    <div className="hero">
        <div className="hero__chevronIcons">
            <GoChevronLeft className="hero__chevronIcons__left"/>
            <GoChevronRight className="hero__chevronIcons__right"/>
        </div>
            <Imageslider imageSlides={imageSlides}/>
    </div>
  )
}

export default Hero