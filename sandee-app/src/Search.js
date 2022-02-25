// import { Axios } from 'axios';
import axios from 'axios';
import './Search.css';
import React from 'react';
import FlickrFeed from './FlickrFeed';


  
// import xml2js Module
import { parseString } from "xml2js"; 


var Flickr = require('flickr-sdk');
// var XMLParser =require('react-xml-parser');
class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchedUsername:"",
            user_id: null,
            flickrImages:null
        };
        // this.updateImages =this.updateImages.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.getPhotos = this.getPhotos.bind(this);
        this.checkState = this.checkState.bind(this);
    } 
    
    handleChange(e){
        this.setState({searchedUsername:e.target.value});
        e.preventDefault();
    }

    checkState(e){
        console.log(this.state);
        e.preventDefault();        

        // return this.state.flickrImages;

    }

    getPhotos(e){
        let getFlickrImageURL = function(photo) {
   
            let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;


            // let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
            //   photo.secret
            // }`;
            // if (size) {
            //   // Configure image size
            //   url += `_${size}`;
            // }
            // url += '.jpg';
            return url;
        };
        const searched = this.state.searchedUsername;

        console.log(searched);
        const url =`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_KEY}&tags=${searched}`;
        var self = this;

        // Flickr sdk api call
        // var flickr = new Flickr(process.env.REACT_APP_FLICKR_KEY);
        // flickr.photos.search({
        // text: "Dellarontay"
        // }).then(function (res) {
        // console.log('Flickr photos retrieved', res.body);
        // var imgs= res.body.photos.photo.map((photo) => {
        //     return getFlickrImageURL(photo, 'q');
        // }).then(()=>{
        //     console.log(imgs);
        //     self.setState({flikrImages:imgs});
        // });

        // }).catch(function (err) {
        // console.error('Error retrieving Flikr photos', err);
        // });

        // Axios api call

        axios.get(url).then(response=>{
            console.log(response);

            let val =parseString(response.data, function(err,results){
                console.log(results);
                let photos = [];
                if(results.rsp.photos[0].photo){
                    photos= results.rsp.photos[0].photo;
                    photos = photos.slice(0, photos.length>=10? 10 :photos.length);

                }
                else{
                    console.log("there are no results.")
                }
                

                const imgs = photos.map((photo)=>{
                    return getFlickrImageURL(photo.$);
                });

                self.setState({flickrImages:imgs});
            });
        })

        e.preventDefault();        
    }

    render(){
        const imgs = this.state.flickrImages;
        return(
            <div>

                <form className="search rounded-bottom" action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="searchInfoText rounded">Search flickr photos</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search flickr photos"
                        name="s" 
                        className="searchInput rounded"
                        value ={this.state.searchedUsername}
                        onChange={this.handleChange}
                    />
                    <button className="searchButton rounded" type="submit" onClick={this.getPhotos}>Search</button>
                    <button onClick={this.checkState}>check State</button>
                </form>
                
                <div className='container justify-content-center'>
                    <h1>Your Searched Images: </h1>
                </div>
                

                <FlickrFeed imgs={imgs}>

                </FlickrFeed>
            </div>

        )
    }
}

export default Search;