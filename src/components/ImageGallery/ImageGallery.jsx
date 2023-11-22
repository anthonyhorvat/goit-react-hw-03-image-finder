import ImageGalleryItem from './ImageGalleryItem';
import css from './imageGallery.module.css';


const ImageGallery = ({ pictures, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {pictures.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          picture={picture}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
