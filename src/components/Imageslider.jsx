import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Imageslider = ({imageSlides}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const goLeft = () => {
      setIsFading(true);
      const firstSlide = currentImageIndex === 0;
      const newIndex = firstSlide ? imageSlides.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(newIndex)
  }
  const goRight = () => {
    setIsFading(true);
    const lastSlide = currentImageIndex === imageSlides.length - 1;
    const newIndex = lastSlide ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      goRight();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, imageSlides.length]);

  const handleTransitionEnd = () => {
    setIsFading(false);
  };

  // useEffect(() => {
  //   if (isFading) {
  //     const timeoutId = setTimeout(() => {
  //       setIsFading(false);
  //     }, 1000); 
  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [isFading]);

  return (
    <div className='imageSlide'>
      <div className="imageSlide__chevronIcons">
            <GoChevronLeft onClick={goLeft} className="imageSlide__chevronIcons__left"/>
            <GoChevronRight onClick={goRight} className="imageSlide__chevronIcons__right"/>
        </div>
      <div className={`imageSlide__imageContainer ${ isFading ? 'imageSlide__fade-out' : ''}`}
        style={{ backgroundImage: `url(${imageSlides[currentImageIndex].url})` }}
        onTransitionEnd={handleTransitionEnd}></div>
    </div>
  
  )
}

Imageslider.propTypes = {
    imageSlides: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        caption: PropTypes.string,
      })
    ).isRequired,
  };

export default Imageslider