<<<<<<< HEAD
<<<<<<< HEAD
=======
// import { Axios } from 'axios';
=======
>>>>>>> 9b76eec... cleanup and final project details
import axios from 'axios';
import './Search.css';
import React from 'react';
import FlickrFeed from './FlickrFeed';
  
// import xml2js Module
import { parseString } from "xml2js"; 

<<<<<<< HEAD

// var Flickr = require('flickr-sdk');
// var XMLParser =require('react-xml-parser');
>>>>>>> 63dffee... update to base functionality.
=======
>>>>>>> 9e4d67d... Added gif of site functionality
class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
<<<<<<< HEAD
            value: null,
        };
    } 
=======
            searchedUsername:"",
=======
            searched:"",
            welcomeText:"Your searched photos will appear here:",
>>>>>>> 9b76eec... cleanup and final project details
            user_id: null,
            flickrImages:null
        };
        this.handleChange =this.handleChange.bind(this);
        this.getPhotos = this.getPhotos.bind(this);
        this.checkState = this.checkState.bind(this);
    } 
    
    handleChange(e){
        this.setState({searched:e.target.value});
        e.preventDefault();
    }

    checkState(e){
        console.log(this.state);
        e.preventDefault();        
    }

    getPhotos(e){
        let getFlickrImageURL = function(photo) {
   
            let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            return url;
        };
        const searched = this.state.searched;

        console.log(searched);
        const url =`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_KEY}&tags=${searched}`;
        var self = this;

        // Axios api call
        axios.get(url).then(response=>{
            parseString(response.data, function(err,results){
                let photos = [];
                if(err){
                    const message="There was an error from the Flickr api";
                    self.setState({welcomeText:message});
                }
                else{
                    if(results.rsp.photos[0].photo){
                        photos= results.rsp.photos[0].photo;
                        photos = photos.slice(0, photos.length>=10? 10 :photos.length);

                        const imgs = photos.map((photo)=>{
                            return getFlickrImageURL(photo.$);
                        });
        
                        self.setState({flickrImages:imgs});
                        const message = "Here are your images!";
                        self.setState({welcomeText:message});
    
                    }
                    else{
                        const message = "Your search didn't bring up any results";
                        console.log(message);
                        self.setState({welcomeText:message});
                    }

                }
            });
        })

        e.preventDefault();        
    }

>>>>>>> 63dffee... update to base functionality.
    render(){
        const imgs = this.state.flickrImages;
        const welcomeText = this.state.welcomeText;
        return(
<<<<<<< HEAD
            <form className="search" action="/" method="get">
                <label htmlFor="header-search">
                    <span className="searchInfoText">Search flickr photos</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search flickr photos"
                    name="s" 
                    className="searchInput"
                />
                <button className="searchButton" type="submit">Search</button>
            </form>
=======
            <div>

                <form className="search rounded-bottom row justify-content-center" action="/" method="get">
                    <label htmlFor="header-search" className='col-md-12'>
                        <span className="searchInfoText rounded">Flickr Image Link Retriever! by <a className="personalLink" href='https://dellarontayr.github.io'>Dellarontay Readus</a> </span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search flickr photos"
                        name="s" 
                        className="searchInput rounded col-md-12"
                        value ={this.state.searched}
                        onChange={this.handleChange}
                    />
                    <div className='col-md-12'>
                        <button className="searchButton rounded" type="submit" onClick={this.getPhotos}>Search</button>
                    </div>
                </form>
                
                <div className='container justify-content-center'>
                    <h1>{welcomeText} </h1>
                </div>
                

                <FlickrFeed imgs={imgs}>

                </FlickrFeed>
            </div>

>>>>>>> 63dffee... update to base functionality.
        )
    }
}

export default Search;