<<<<<<< HEAD
=======
import React from 'react';
import './FlickrFeed.css';


>>>>>>> 63dffee... update to base functionality.
class FlickrFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imageSize: {width:'100%',height:'100%'}
        };
    } 
    
    render(){
<<<<<<< HEAD
        return(

            <div className="container">
                <div className="row">
                    <div className="col-4">
                    {this.state.flickrImages.map((image) => {
                        return <div style={this.state.imageSize} className="square">{image}</div>;
                    })}
=======
        const imgs = this.props.imgs;
        if(imgs){
            return(
                <div className="container">
                    <div className="">
                        <div className="row">
                            {imgs.map((image) => {
                                return <div key={image} className="col-lg-6"> <img className='rounded' style={this.state.imageSize}  src={image} /> </div>;
                            })}
                        </div>
>>>>>>> 63dffee... update to base functionality.
                    </div>
                </div>
            </div>
        )
    }
}

export default FlickrFeed;