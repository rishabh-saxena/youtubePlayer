import React from 'react';
import VideoComponent from './VideoComponent.jsx';
export default class VideoList extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render()
    {
        return(
      <ul>
      
      {this.props.videos.map((video)=>
      {
        
          return <VideoComponent video={video} selectCurrent={(video)=>{
              this.props.updateCurrentVideo(video);}}/>;
      })}
      </ul>
      );
    }
}