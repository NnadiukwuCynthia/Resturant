
const GalleryImages = () => {

    const images = [
        '../../../img-1.jpg',
        '../../../img-2.jpg',
        '../../../img-3.jpg',
        '../../../img-4.jpg',
        '../../../img-5.jpg',
        '../../../img-6.jpg',
        '../../../img-7.jpg',
        '../../../img-8.webp',
        '../../../img-9.webp',
        '../../../img-10.webp',
    ]
  return (
    <div className="galleryImages">
        {images.map((image, index) => (
        <div key={index} className="galleryImages__galleryContainers">
        <img src={image} alt={`Image ${index}`}  className="galleryImages__galleryContainers__galleryImages"/>
    </div>
))}

    </div>
  )
}

export default GalleryImages