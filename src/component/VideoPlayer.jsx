import React from 'react';
export default class VideoPlayer extends React.Component{
    render()
{ let urlString;
        if(this.props.onSelectVideo)
{
            urlString = 'https://www.youtube.com/embed/'+this.props.onSelectVideo;
            console.log("id is", this.props.onSelectVideo)
        } 
        else
{
            urlString = 'http://www.google.com/';
        }       
        return(
<iframe src={urlString}></iframe>
);
    }
}