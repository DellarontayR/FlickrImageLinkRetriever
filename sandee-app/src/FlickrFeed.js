import React from 'react';
import './FlickrFeed.css';


class FlickrFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imageSize: {width:'200px',height:'200px'}
        };
    } 
    
    render(){
        const imgs = this.props.imgs;
        if(imgs){
            return(
                <div className="container">
                    <div className="flickrImage">
                        <div className="row">
                            {imgs.map((image) => {
                                return ([ 
                                <div key={image} className="col-lg-6"> <a className="flickrA" href={image} target="_blank" rel="noreferrer">View Image Link</a> <img className='rounded' style={this.state.imageSize}  src={image} alt="Flickr Link"/> </div>]);
                            })}
                        </div>
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