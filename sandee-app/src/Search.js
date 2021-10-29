import { Axios } from 'axios';
import * as axios from 'axios';
import './Search.css';


import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchedUsername:null,
            value: null,
            flickrImages:null
        };
        this.updateImages =this.updateImages.bind(this);
    } 
    getPhotos(){
        const k = "1ad821a1f57b30ab4b753d761ddb57ed";
        const userId = "39873962@N08";
        const url ="http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key="+k +"&user_id="+userId;
        axios.get(url,).then((response)=>{
            this.setState(state=>{
                const images = state.flickrImages;
                this.flickrImages = response;
                console.log(this.flickrImages);
            })
        })
    }
    updateImages(e){
        e.preventDefault();
        console.log("Submitted");
        const k = "1ad821a1f57b30ab4b753d761ddb57ed";
        const searchUrl = "https://www.flickr.com/services/rest/?method=flickr.people.findByUsername&"+k;
        axios.get(searchUrl).then((response) => {
            this.setState({
                searchedUsername:response
            });
          })
          .catch((err) => {
              console.log(this.state);
        })

        return ()=>{
            console.log(this.state.searchedUsername);
            console.log(this.flickrImages);

        }

        // const searchedUsername = state.searchedUsername;
        // this.searchedUsername = response;
        // console.log(response);
        // console.log(this.searchedUsername);


    }

    render(){
        return(
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
                />
                <button className="searchButton rounded" type="submit" onClick={this.updateImages}>Search</button>
            </form>
        )
    }
}

export default Search;