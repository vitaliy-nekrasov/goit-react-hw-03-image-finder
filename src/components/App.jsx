import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import { getPictures } from 'services/api';

export class App extends Component {
  state = {
    searchQuery: '',
  };
  submitForm = searchQuery => {
    this.setState({ searchQuery });
  };
  // getPictures();
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
      </div>
    );
  }
}
