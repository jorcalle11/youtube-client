import React from 'react';
import { ListGroup } from 'react-bootstrap';
import VideoListItem from './Video_list_item';

const VideoList = ({videos,onVideoSelected}) => {
  const renderVideos = () => (
    videos.map(video => {
      return (
        <VideoListItem
          key={video.id.videoId}
          video={video}
          onVideoSelected={onVideoSelected}/>
      )
    })
  )

  return (
    <ListGroup>
      {renderVideos()}
    </ListGroup>
  );
};

export default VideoList;