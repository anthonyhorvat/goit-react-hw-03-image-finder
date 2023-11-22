import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ picture, openModal }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => openModal(picture.largeImageURL)}
    >
      <img
        src={picture.webformatURL}
        alt=""
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
