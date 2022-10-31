import { Component } from 'react';
import { Header, Form, Button, ButtonText, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  inputHandler = e => {
    this.setState({ searchQuery: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    // e.target.reset();
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.submitHandler}>
          <Button type="submit">
            <ButtonText>Search</ButtonText>
          </Button>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputHandler}
          />
        </Form>
      </Header>
    );
  }
}
