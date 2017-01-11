import React from 'react';
import { ResponsiveEmbed,Alert,Label } from 'react-bootstrap';

const details = {marginTop: '1em',border: '1px solid #ddd',padding: '.9em',borderRadius: '3px'}
const embedVideo = {border: '1px solid #ddd'}
const title = {fontWeight:700}

const VideoDetail = ({video}) => {
  if(!video) {
    return <Alert bsStyle="warning" className="text-center">Loading...</Alert>
  }

  const { snippet } = video
  const url = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <ResponsiveEmbed a16by9 style={embedVideo}>
        <iframe
          src={url}
          className="embed-responsive-item">
        </iframe>
      </ResponsiveEmbed>
      <div style={details}>
        <h4 style={title}>{snippet.title}</h4>
        <Label bsStyle="info">{snippet.channelTitle}</Label>
        <div>{snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;