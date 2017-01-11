import React, {Component} from 'react';
import youtubeApi from 'youtube-api-search';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid,Row,Col } from 'react-bootstrap';
import _ from 'lodash';
import SearchBar from './Search_bar';
import VideoList from './Video_list';
import Header from '../common/Nabvar';
import VideoDetail from './Video_detail';
const key = 'AIzaSyBwzqKEYsBjGfL2DIyfX8l1MtThM8qRfCU'
const style ={ marginTop: '1em' }

class App extends Component {
  constructor() {
    super()
    this.state = { videos : [], selectedVideo: null }
    this.searchVideo('angular')
  }

  searchVideo(term) {
    youtubeApi({key,term}, videos => {
      this.setState({videos: videos, selectedVideo: videos[0]})
    })
  }

  render() {
    // Trottling search
    const videoSearch = _.debounce((term) => {this.searchVideo(term)},300)
    return (
      <div>
        <Header title="Youtube Client"/>
        <Grid componentClass="section">
          <SearchBar onSearch={videoSearch}/>
          <Row style={style}>
            <Col md={8}>
              <VideoDetail video={this.state.selectedVideo}/>
            </Col>
            <Col xs={12} md={4}>
              <VideoList
                videos={this.state.videos}
                onVideoSelected={selectedVideo => this.setState({selectedVideo})}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;