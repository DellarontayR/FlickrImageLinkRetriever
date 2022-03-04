
import React from 'react';
import './FlickrFeed.css';
class FlickrFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imageSize: {height:'400px'}
        };
    } 
    
    render(){
        const imgs = this.props.imgs;


        if(imgs){
            return(
                <div className='base'>
                    <div className="container">
                        <div className="row">
                            {imgs.map((image) => {
                                return ([ 
                                    <div key={image} className='col-lg-6'>
                                        <div className="card">
                                            <div>
                                            <img className="card-img-top" src={image} alt="Flickr Link" style={this.state.imageSize}/>
                                            </div>
                                            <div className='card-body centered'>
                                                <a className='flickA' href={image} rel="noreferrer noopener">View Image Link</a>
                                            </div>
                                        </div>
                                    </div>]);

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