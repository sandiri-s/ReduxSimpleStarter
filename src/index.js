import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
//import config from './config'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'

const API_KEY = config.key


class App extends Component {
constructor(props){

super(props);
this.state = {
  videos : [],
  selectedVideo : null
};
YTSearch({key : API_KEY , term: 'KTR telangana'},
(videos) => {
this.setState({
  videos : videos,
  selectedVideo : videos[0]
});
});
}

render() {
  return (
    <div>
    <SearchBar />
    <VideoDetail  onVideoSelect={selectedVideo => this.setState({selectedVideo}) }  video={this.state.selectedVideo}/>
    <VideoList   videos = {this.state.videos} />
     </div>);
}
}
ReactDom.render(<App />, document.querySelector('.container'))
