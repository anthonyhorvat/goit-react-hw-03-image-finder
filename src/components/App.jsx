import { Component } from 'react';
import css from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import fetchPixabayImages from 'api/fetchImages';

export class App extends Component {
  state = {
    isLoading: false,
    pictures: [],
    query: '',
    page: 1,
    selectedImage: '',
    showModal: false,
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { page, query } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await fetchPixabayImages(query, page);

      const { hits, totalHits } = data;

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        isLoading: false,
        showModal: false,
        loadMore: hits.length > 0,
      }));
      const imagesLoaded = page * 12;
      if (imagesLoaded >= totalHits) {
        this.setState({ loadMore: false });
      }
    } catch (error) {
      this.setState({ error: 'Failed to fetch images', isLoading: false });
    }
  };
  handleSearch = query => {
    this.setState({ query, page: 1, pictures: [], loadMore: true });
  };

  openModal = imageUrl => {
    this.setState({ showModal: true, selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { pictures, isLoading, showModal, selectedImage, loadMore } =
      this.state;

    return (
      <div className={css.Application}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery pictures={pictures} openModal={this.openModal} />

        {isLoading && <Loader />}
        {showModal && (
          <Modal imageUrl={selectedImage} closeModal={this.closeModal} />
        )}
        {pictures.length > 0 && loadMore && (
          <Button onClick={this.loadMoreImages} />
        )}
      </div>
    );
  }
}
