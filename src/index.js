import React, { Component } from 'react';  //React is for creating component
import ReachDOM from 'react-dom'; //React dom is for rendering components in the DOM
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetails from './components/video_details'
import _ from 'lodash';

import YTSearch from 'youtube-api-search';




//Create a new component. This component should produce some HTML

const API_KEY = 'AIzaSyA43h_5eDdzGzxyCs1Hl-FPKbZlUVnPdig';



class App  extends Component{

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards')

    }


    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // console.log(videos);
            // this.setState({videos: videos});
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos = {this.state.videos} />
            </div>
        );
    }
}

//Take this component's generated HTML and put it on the page (in the DOM)
//JSX is a subset of dialect of javascript

ReachDOM.render(<App />, document.querySelector('.container'));