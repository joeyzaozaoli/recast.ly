class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: exampleVideoData[0]
    };
    this.searchYouTubeDebounced = _.debounce(this.props.searchYouTube, 500);
  }

  render() {
    return (
      <div>
        <Nav search={this.handleUserInput.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList}
            handleTitleClick={this.handleTitleClick.bind(this)} />
        </div>
      </div>
    );
  }

  handleTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleUserInput(string) {
    this.searchYouTubeDebounced({query: string, max: 5, key: YOUTUBE_API_KEY},
      this.populateLiveData.bind(this));
  }

  populateLiveData(videos) {
    this.setState({
      videoList: videos,
      currentVideo: videos[0]
    });
  }

  componentDidMount() {
    this.searchYouTubeDebounced({query: 'swan lake', max: 5, key: YOUTUBE_API_KEY},
      this.populateLiveData.bind(this));
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
