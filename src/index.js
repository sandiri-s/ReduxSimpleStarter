import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import config from './'

const API_KEY = config.key


const App = () => {

  return (
    <div>
    <SearchBar />
     </div>);
}

ReactDom.render(<App />, document.querySelector('.container'))
