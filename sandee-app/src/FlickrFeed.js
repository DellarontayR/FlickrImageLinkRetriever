import React from 'react';
import './FlickrFeed.css';


class FlickrFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imageSize: {width:'100%',height:'100%'}
        };
    } 
    
    render(){
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