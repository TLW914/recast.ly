import VideoList from '../components/VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from '../components/VideoPlayer.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        currentPlayerVideo : exampleVideoData[0],
        videos : exampleVideoData
      }
    }

  onListItemClick(video) {
    this.setState({
      currentPlayerVideo : video
    })
  }
  render() {
    return(
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video= {this.state.currentPlayerVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList click={this.onListItemClick.bind(this)} videos= {this.state.videos}/>
      </div>
    </div>
  </div>
)};


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


