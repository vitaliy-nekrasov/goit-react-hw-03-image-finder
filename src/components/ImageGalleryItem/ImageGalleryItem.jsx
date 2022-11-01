import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { getPictures } from 'services/api';

export class ImageGalleryItem extends Component {
  state = {
    result: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    console.log(prevQuery);

    if (prevQuery !== nextQuery) {
      this.setState({ result: [] });
    }
    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.props.loading(true);
      setTimeout(() => {
        getPictures(nextQuery, this.props.page).then(response => {
          this.setState(prevState => ({
            result: [...prevState.result, ...response],
          }));
          this.props.loading(false);
          this.props.getItems(this.state.result);
        });
      }, 500);
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
