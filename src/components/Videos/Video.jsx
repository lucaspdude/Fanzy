import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import UserBadge from '../User/UserBadge';
// import { Container } from './styles';

function Video({video}) {
    const [overlay, setOverlay] = useState(true)
  return (
      <div className="video-content">
          <div className="media-container">
              
              <div className="media-overlay">
                <ReactPlayer
                    className="media-content"
                    url={video.url}
                    controls={true}
                    width='100%'
                    height='100%'
                    onPause={() => setOverlay(true)}
                    onPlay={() => setOverlay(false)}
                />
                  <div className={`overlay-text ${overlay ? 'display' : 'hide'}`}>
                      Lorem ipsum dolor sit amet.
                  </div>
              </div>
              <UserBadge user={video.user} />
              
          </div>
      </div>
  );
}

export default Video;