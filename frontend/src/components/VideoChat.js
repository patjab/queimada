import React, {Fragment, Component} from 'react'

import $ from 'jquery'
import Handlebars from 'handlebars'
import SimpleWebRTC from 'simplewebrtc'

export default class VideoChat extends Component {
  componentDidMount() {
    if (this.props.currentUser && Object.keys(this.props.currentFriend).length !== 0) {
      let username = this.props.currentUser.full_name + this.props.currentUser.id
      let roomName = [this.props.currentUser, this.props.currentFriend].sort().join("")

      const localVideoEl = $('#local-video');
      const remoteVideoTemplate = Handlebars.compile($('#remote-video-template').html());
      const remoteVideosEl = $('#remote-videos');

      $('#local-video').on('click', (e) => {
        console.log("HEY", e)
      })

      const webrtc = new SimpleWebRTC({
        localVideoEl: 'local-video',
        remoteVideosEl: 'remote-videos',
        autoRequestMedia: true,
      });

      webrtc.on('localStream', () => {
        localVideoEl.show();
      });

      console.log("OUTSIDE CLICK")

      $('#join-btn').on('click', (event) => {
        console.log("INSIDE CLICK")
        webrtc.joinRoom(roomName);
        $(`#join-btn`).remove()
        return false;
      });

      webrtc.on('videoAdded', (video, peer) => {
        const id = webrtc.getDomId(peer);
        const html = remoteVideoTemplate({ id });
        $('#allVideos').append(html);
        $(`#${id}`).html(video);
        $(`#${id}`).addClass('ui image small'); // Make video element responsive
      });
    }
  }



  joinPrep = (e) => {
    alert("WHY")
  }

  render() {
    return (<Fragment>
      <span id="allVideos" className="video-container">
        <video id="local-video" className="ui big image hidden" autoplay></video>
        <div className="overlay-desc">
          { (this.props.currentUser && Object.keys(this.props.currentFriend).length !== 0) ?
              <button id="join-btn" className="ui submit green massive transparent button" style={{"opacity":"0.6"}}>Call {this.props.currentFriend.full_name}</button>
                : null
          }
        </div>
        <div className="overlay-desc-2">
          <span id="remote-videos" className="ui big small"></span>
        </div>
      </span>
      <script id="remote-video-template" type="text/x-handlebars-template"></script>
    </Fragment>)
  }
}
