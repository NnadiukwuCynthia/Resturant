
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
            <Imageslider imageSlides={imageSlides}/>
    </div>
  )
}

export default Hero