import PropTypes from 'prop-types';
import { useState } from 'react';

const Imageslider = ({imageSlides}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    
        <div className='imageContainer' style={{backgroundImage: `url(${imageSlides[currentImageIndex].url})`}}></div>
  
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