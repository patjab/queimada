import React, {Fragment, Component} from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import $ from 'jquery'
import Handlebars from 'handlebars'
import SimpleWebRTC from 'simplewebrtc'

export default class VideoChat extends Component {
  componentDidMount() {
      let username = this.props.currentUser
      let roomName = this.props.friendshipId

      const localImageEl = $('#local-image');
      const localVideoEl = $('#local-video');
      const remoteVideoTemplate = Handlebars.compile($('#remote-video-template').html());
      const remoteVideosEl = $('#remote-videos');

      const webrtc = new SimpleWebRTC({
        localVideoEl: 'local-video',
        remoteVideosEl: 'remote-videos',
        autoRequestMedia: true,
      });

      webrtc.on('localStream', () => {
        localImageEl.hide();
        localVideoEl.show();
      });

      $('.submit').on('click', (event) => {
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

  render() {
    return (<Fragment>
      <span id="allVideos" className="video-container">
        <video id="local-video" className="ui big image hidden" autoplay></video>
        <div className="overlay-desc">
          <button id="join-btn" className="ui submit green massive transparent button" style={{"opacity":"0.6"}}>Connect</button>
        </div>
        <div className="overlay-desc-2">
          <span id="remote-videos" className="ui big small"></span>
        </div>
      </span>
      <script id="remote-video-template" type="text/x-handlebars-template"></script>
    </Fragment>)
  }
}
