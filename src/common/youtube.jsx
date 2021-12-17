import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// eslint-disable-next-line
const API = 'AIzaSyB-XBNfoA1HQzODz3wrcTKOf-TP8F3qOfw';
// eslint-disable-next-line
const channelID='UCL40n3ctf4hoNSiw-rpDfQw';
// eslint-disable-next-line
const result = 5;

// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
    constructor(props){
        super(props); 
        this.state = {
            item : [],
            resultytb : [], 
            infos : [],
        }
    }

    componentDidMount(){
        fetch (finalURL)
            .then((response) => response.json())
            .then((responseJson) =>{
                // console.log(responseJson); 
                const resultytb = responseJson.items.map(obj => obj.id.videoId); 
                const info = responseJson.items.map(info => info.snippet.title); 
                // this.setState({resultyt})
                this.setState({resultytb, info})
                console.log(this.state.resultyt, this.state.info)
            })
            .catch((error) =>{
                console.error(error); 
            }); 
    }
    render() { 
        
        return (
            <div className="container">
                <div className="container">
                    <h1 style={{textAlign:"center", color:'white'}}>Biso Production Playlist</h1>
                </div>

                <div className="container">
                    {this.state.resultytb.map(result => 
                        <div key={result} className="card" style={{width:'100%', margin:'5px',backgroundColor:'#34495e'}}>
                            <div className="card-body">
                                <h5 className="card-title" style={{color:'white'}}>title</h5>
                                <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${result}`} title="YouTube video player" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; " 
                                allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
 
export default Youtube;