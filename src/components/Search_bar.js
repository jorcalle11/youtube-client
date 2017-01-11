import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = { word : ''}
  }

  render() {
    return(
      <FormControl
        type="text"
        placeholder="Busca un video..."
        value={this.state.word}
        onChange={e => this.setState({word : e.target.value})}/>
    )
  }
}



export default SearchBar;