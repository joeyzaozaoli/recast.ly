class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <Nav />
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

  componentDidMount() {
    this.props.searchYouTube({query: 'swan lake', max: 5, key: YOUTUBE_API_KEY}, this.populateLiveData.bind(this));
  }

  populateLiveData(videos) {
    this.setState({
      videoList: videos,
      currentVideo: videos[0]
    });
  }

  handleTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
