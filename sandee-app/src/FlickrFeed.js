import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import './FlickrFeed.css';
class FlickrFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            flickrImages: null,
            imageSize: {width:'100px',height:'100px'}
        };
    } 
    render(){
        if(this.state.flickrImages){
            return(
                <div className="container">
                    <div className="row">
                        <ul>
                            <li className="col-4">
                                {this.state.flickrImages.map((image) => {
                                    return <div style={this.state.imageSize} className="flickrImage rounded">{image}</div>;
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
        else{
            return null;
        }
       
    }
}

export default FlickrFeed;