import React from 'react';
import { Row,Col,ListGroup } from 'react-bootstrap';
import VideoListItem from './Video_list_item';

const VideoList = ({videos}) => {
  const renderVideos = () => (
    videos.map(video => {
      return <VideoListItem key={video.id.videoId} video={video}/>
    })
  )

  return (
    <Row>
      <Col md={8}>
        mundo
      </Col>
      <Col xs={12} md={4}>
        <ListGroup>
          {renderVideos()}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default VideoList;