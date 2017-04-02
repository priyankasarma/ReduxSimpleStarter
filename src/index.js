import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyB9FLYRn6acyI4zTp4cSKbe5A154DHg70M';

// Create a new component that produces some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({
            key: API_KEY,
            term: 'surfboards'
        }, videos => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}

// Render the generated HTML in the DOM of the web page
ReactDOM.render(<App />, document.querySelector('.container'));