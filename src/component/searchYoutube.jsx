import React from 'react';
export default class SearchYoutube extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    videoValue(event)
    {
        this.props.onTermChange(event.target.value);
        //console.log(event.target.value);
    }
    render()
{
        return (
        <div>   
        <input onChange={this.videoValue.bind(this)}/>
        </div>
        );
    }
}