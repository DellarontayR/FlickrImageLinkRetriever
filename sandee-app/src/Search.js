class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    } 
    render(){
        return(
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
        )
    }
}

export default Search;