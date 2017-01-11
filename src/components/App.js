import React, {Component} from 'react';
import youtubeApi from 'youtube-api-search';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid } from 'react-bootstrap';
import SearchBar from './Search_bar';
import VideoList from './Video_list';
import Header from '../common/Nabvar';
const key = 'AIzaSyBwzqKEYsBjGfL2DIyfX8l1MtThM8qRfCU'

class App extends Component {
  constructor() {
    super()
    this.state = {videos : []}
  }

  componentWillMount() {
    youtubeApi({key,term : 'webpack'}, videos => this.setState({videos}))
  }

  render() {
    return (
      <div>
        <Header title="Youtube Client"/>
        <Grid componentClass="section">
          <SearchBar/>
          <VideoList videos={this.state.videos} />
        </Grid>
      </div>
    );
  }
}

export default App;