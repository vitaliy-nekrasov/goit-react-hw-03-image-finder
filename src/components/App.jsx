import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
  };
  loadMore = () => {
    if (this.state.searchQuery) {
      this.setState(prevState => ({ page: prevState.page + 1 }));
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
          />
        </ImageGallery>
        <Button loadMore={this.loadMore} />
      </div>
    );
  }
}
