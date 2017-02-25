import React from 'react';
export default class VideoComponent extends React.Component {
    currentVideo(videoId)
    {
        this.props.selectCurrent(videoId.id.videoId);
    }
    render() {
        return (
<li onClick={this.currentVideo.bind(this,this.props.video)}>
<div>
    <img src={this.props.video.snippet.thumbnails.high.url} height="100" width="100" />  
 </div>
</li>
);
    }
}
