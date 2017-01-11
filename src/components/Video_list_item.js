import React from 'react';
import moment from 'moment';
import { ListGroupItem,Media,Label } from 'react-bootstrap';

const label = {color: '#777', backgroundColor: 'unset',display:'block',textAlign: 'left'}

const VideoListItem = ({video,onVideoSelected}) => {
  const { snippet } = video
  const { url } = snippet.thumbnails.default
  return (
    <ListGroupItem onClick={() => onVideoSelected(video)}>
      <Media>
        <Media.Left>
          <img
            src={url}
            alt={video.id.videoId}
            title={snippet.title}
            className="media-object"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{snippet.title}</Media.Heading>
          <Label style={label}>{snippet.channelTitle}</Label>
          <Label style={label}>{moment(snippet.publishedAt).startOf('day').fromNow()}</Label>
        </Media.Body>
      </Media>
    </ListGroupItem>
  );
};

export default VideoListItem;