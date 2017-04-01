import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyB9FLYRn6acyI4zTp4cSKbe5A154DHg70M';

// Create a new component that produces some HTML
const App = () => <div><SearchBar /></div>;


// Render the generated HTML in the DOM of the web page
ReactDOM.render(<App />, document.querySelector('.container'));