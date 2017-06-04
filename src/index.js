import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyB9FLYRn6acyI4zTp4cSKbe5A154DHg70M';

// Create a new component that produces some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={ this.state.videos } />
            </div>
        );
    }
}

// Render the generated HTML in the DOM of the web page
ReactDOM.render(<App />, document.querySelector('.container'));