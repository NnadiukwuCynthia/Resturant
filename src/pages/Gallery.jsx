import GalleryHero from "../components/Gallery/GalleryHero"
import GalleryImages from './../components/Gallery/GalleryImages';
import Footer from '../components/Footer';

const Gallery = () => {
  return (
    <div>
      <GalleryHero/>
      <h1 className="galleryHeader">Gallery</h1>
      <GalleryImages/>
      <Footer/>
    </div>
  )
}

export default Gallery