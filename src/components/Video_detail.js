import React from 'react';
import { ResponsiveEmbed,Alert } from 'react-bootstrap';

const VideoDetail = ({video}) => {
  if(!video) {
    return <Alert bsStyle="warning" className="text-center">Loading...</Alert>
  }

  const { snippet } = video
  const url = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <ResponsiveEmbed a16by9>
        <iframe
          src={url}
          className="embed-responsive-item">
        </iframe>
      </ResponsiveEmbed>
      <div className="details">
        <div>{snippet.title}</div>
        <div>{snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;