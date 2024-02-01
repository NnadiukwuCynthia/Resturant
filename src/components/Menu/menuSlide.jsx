import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MenuSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };
      
    const images = [
        '../../../menuOne.jpg',
        '../../../menuTwo.jpg',
        '../../../menuThree.jpg',
        '../../../menuFour.jpg',
        '../../../menuFive.jpg',
        '../../../menuSix.jpg',
        '../../../menuSeven.jpg',
        '../../../menuEight.jpg',

    ]
  return (
    <Slider {...settings} >
      {images.map((image, index) => (
        <div key={index} className='menuSlide'>
          <div className='menuSlide__slider' style={{ backgroundImage: `url(${image})` }}></div>
        </div>
      ))}
    </Slider>
  )
}

export default MenuSlide