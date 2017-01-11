import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = { word : ''}
  }

  handleChange(term) {
    this.setState({word : term})
    this.props.onSearch(term)
  }

  render() {
    return(
      <FormControl
        type="text"
        placeholder="Busca un video..."
        value={this.state.word}
        onChange={e => this.handleChange(e.target.value)}/>
    )
  }
}



export default SearchBar;