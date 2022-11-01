import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    result: [],
    page: 1,
    isLoading: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps);
  // }

  getItems = items => {
    this.setState({ result: items });
  };

  isLoadingToggle = bool => {
    this.setState({ isLoading: bool });
  };

  loadMore = () => {
    if (this.state.searchQuery) {
      this.setState(prevState => ({ page: prevState.page + 1 }));
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 1000);
    }
  };
  submitForm = searchQuery => {
    this.setState({ searchQuery, page: 1 });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery>
          <ImageGalleryItem
            searchQuery={this.state.searchQuery}
            page={this.state.page}
            loading={this.isLoadingToggle}
            getItems={this.getItems}
          />
        </ImageGallery>
        {this.state.isLoading && <Loader />}
        {this.state.searchQuery !== '' && this.state.isLoading === false && (
          <Button loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}
