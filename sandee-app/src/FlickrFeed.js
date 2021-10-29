class FlickrFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            flickrImages: null,
            imageSize: {width:'100px',height:'100px'}
        };
    } 
    render(){
        return(

            <div className="container">
                <div className="row">
                    <div className="col-4">
                    {this.state.flickrImages.map((image) => {
                        return <div style={this.state.imageSize} className="square">{image}</div>;
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default FlickrFeed;