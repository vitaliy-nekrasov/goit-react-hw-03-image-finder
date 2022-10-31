import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { getPictures } from 'services/api';

export class ImageGalleryItem extends Component {
  state = {
    result: [],
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    if (prevQuery !== nextQuery) {
      getPictures(nextQuery, this.state.page).then(response => {
        this.setState({ result: response });
      });
    }
  }
  render() {
    return this.state.result.map(({ id, webformatURL }) => {
      return (
        <Item key={id}>
          <Image src={webformatURL} alt="" />
        </Item>
      );
    });
  }
}
