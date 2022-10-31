import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
  };
  submitForm = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery>
          <ImageGalleryItem searchQuery={this.state.searchQuery} />
        </ImageGallery>
        <Button />
      </div>
    );
  }
}
