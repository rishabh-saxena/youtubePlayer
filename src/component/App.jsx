import React, { Component } from 'react';
import SearchYoutube from './searchYoutube.jsx';
import VideoList from './VideoList';
const API_KEY = 'AIzaSyDenCqapLWwHmSNzCBNl5xZU6i4X38rs28';
import YoutubeSearchApi from 'youtube-api-search';
import VideoPlayer from './VideoPlayer.jsx';
class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {videos:[],currentVideo:''};
    }
    youtubeSearchUpdate(term)
    {
        YoutubeSearchApi({key:API_KEY,term:term},(data)=>
      {     //console.log(data);
            this.setState({videos:data});
        });
    }
    updateVideo(video)
    {
        this.setState({currentVideo:video});
    }
    render() {
        return (
        <div className="App">
        <div className='searchBox'> 
        <SearchYoutube onTermChange={(term)=>{
            this.youtubeSearchUpdate(term);}}/>
        </div>
        <div className='videoplayer'>
            <VideoPlayer onSelectVideo={this.state.currentVideo}/>
            </div>
            <div className='videoList'>
            <VideoList videos={this.state.videos} updateCurrentVideo={(video)=>{this.updateVideo(video);}}/>
             </div>
</div>
    );
    }
}

export default App;
