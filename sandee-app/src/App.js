import logo from './logo.svg';
import './App.css';

import './Search';
import './FlickrFeed';
import FlickrFeed from './FlickrFeed';
import Search from './Search';

import {FlickrContext,FlickrProvider} from "./FlickrContext";


function App() {
  return (
    <div className="App">
      <Search>

      </Search>

    </div>
  );
}



export default App;
