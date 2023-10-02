function VideoCard(props) {
    console.log(props)
    return (
      <div id="video-card">
        <div id='channel'>
          <img src={props.video.channelLogoUrl} alt='logo' />
          <p id='channel-name'>{props.video.channelName}</p>
        </div>
        <div id='video-details'>
          <div id='thumbnail'>
            <img src={props.video.thumbnailUrl} alt="thumbnail" />
          </div>
          <div id='video-title'>
            <p id='title'>{props.video.title}</p>
            <div id='video-stats'>
              <p id='likes'>{props.video.likes} likes</p>
              <p id='views'>{props.video.views} views</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default VideoCard;
  