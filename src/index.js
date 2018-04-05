import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCpwsOpiYIrfIJy5YGe1YKYFOdPfYZc42Y';

YTSearch({ key: API_KEY, term: 'surfboards' }, function (data) {
  console.log(data);
})



class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    ); 
  };
};











ReactDOM.render(<App />, document.querySelector('.container'));