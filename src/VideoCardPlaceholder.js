import React from "react";

function VideoCardPlaceholder() {
  return (
    <div id="video-card" style={{height:"450px", backgroundColor:"#ededed", border:"2px solid white", opacity:".3"}}>
        <div id='channel'>
          {/* <img src={''} alt='' /> */}
          <p id='channel-name'>{}</p>
        </div>
        <div id='video-details'>
          <div id='thumbnail'>
            {/* <img src={''} alt="" /> */}
          </div>
          <div id='video-title'>
            <p id='title'></p>
            <div id='video-stats'>
              {/* <p id='likes'></p>
              <p id='views'></p> */}
            </div>
          </div>
        </div>
      </div>
  );
}

export default VideoCardPlaceholder;
