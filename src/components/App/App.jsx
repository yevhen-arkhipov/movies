import React, { Component } from 'react';
import jump from 'jump.js';

import Box from 'components/Box';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Button from 'components/Button';

import { getImages } from 'services/api';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    imageQuery: '',
    pageNumber: 1,
    totalPages: 0,
    status: 'idle',
    images: [],
    showModal: false,
    currentImage: {},
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { imageQuery, pageNumber } = this.state;
    const currentimageQuery = imageQuery;
    const currentPage = pageNumber;

    if (
      prevState.imageQuery !== currentimageQuery ||
      prevState.pageNumber !== currentPage
    ) {
      this.setState({ status: 'pending' });
      getImages(currentimageQuery, currentPage)
        .then(data => {
          if (data.hits.lenght === 0) {
            return Promise.reject(
              new Error(`Cannot find ${currentimageQuery}`)
            );
          }
          const totalPages = Math.ceil(data.totalHits / 12);

          const requiredHits = data.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            }
          );
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...requiredHits],
              totalPages: totalPages,
            };
          });
        })
        .then(() => {
          this.setState({ status: 'done', error: '' });
        })
        .catch(error => {
          this.setState({ status: 'error', error: error.message });
        });
      return;
    }
  }

  onSearchHandle = value => {
    this.setState({ imageQuery: value, pageNumber: 1, images: [] });
  };

  onLoadMoreHandle = () => {
    jump(1000);
    this.setState(prevState => {
      return { pageNumber: prevState.pageNumber + 1 };
    });
  };

  onGalleryClickHandle = imageId => {
    const currentImage = this.state.images.find(item => {
      return item.id === Number(imageId);
    });
    this.setState({ currentImage: currentImage, showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      showModal,
      status,
      images,
      currentImage,
      error,
      totalPages,
      pageNumber,
    } = this.state;

    return (
      <>
        <Box as="main">
          <Container>
            <Searchbar onSubmit={this.onSearchHandle} />
            {images.length !== 0 && (
              <ImageGallery
                images={images}
                onClick={this.onGalleryClickHandle}
              />
            )}
            {status === 'pending' && <Loader />}
            {totalPages > pageNumber && (
              <Button onClick={this.onLoadMoreHandle}>Load more</Button>
            )}
            {showModal && (
              <Modal
                imageUrl={currentImage.largeImageURL}
                alt={currentImage.tags}
                onCloseModal={this.onCloseModal}
              />
            )}
            {status === 'error' && <p>{error}</p>}
          </Container>
        </Box>
      </>
    );
  }
}
