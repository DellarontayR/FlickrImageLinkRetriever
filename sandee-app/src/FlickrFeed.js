<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 9e4d67d12be0560c431b93c541ee1e85437a099a
import React from 'react';
import './FlickrFeed.css';


<<<<<<< HEAD
>>>>>>> 63dffee... update to base functionality.
=======
>>>>>>> 9e4d67d12be0560c431b93c541ee1e85437a099a
class FlickrFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imageSize: {width:'200px',height:'200px'}
        };
    } 
    
    render(){
<<<<<<< HEAD
<<<<<<< HEAD
        return(

            <div className="container">
                <div className="row">
                    <div className="col-4">
                    {this.state.flickrImages.map((image) => {
                        return <div style={this.state.imageSize} className="square">{image}</div>;
                    })}
=======
=======
>>>>>>> 9e4d67d12be0560c431b93c541ee1e85437a099a
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
<<<<<<< HEAD
>>>>>>> 63dffee... update to base functionality.
=======
>>>>>>> 9e4d67d12be0560c431b93c541ee1e85437a099a
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