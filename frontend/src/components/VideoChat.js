import React, {Fragment, Component} from 'react'

import $ from 'jquery'
import Handlebars from 'handlebars'
import SimpleWebRTC from 'simplewebrtc'

export default class VideoChat extends Component {
  componentDidMount() {
    if (this.props.currentUser && Object.keys(this.props.currentFriend).length !== 0) {
      let username = this.props.currentUser.email
      let roomName = [this.props.currentUser.email, this.props.currentFriend.email].sort().join("")

      const localVideoEl = $('#local-video');
      const remoteVideoTemplate = Handlebars.compile($('#remote-video-template').html());
      const remoteVideosEl = $('#remote-videos');

      const webrtc = new SimpleWebRTC({
        localVideoEl: 'local-video',
        remoteVideosEl: 'remote-videos',
        autoRequestMedia: true,
      });

      console.log(webrtc)

      webrtc.on('localStream', () => {
        localVideoEl.show();
      });

      $('#join-btn').on('click', (event) => {
        webrtc.joinRoom(roomName);
        $(`#join-btn`).remove()
        return false;
      });

      webrtc.on('videoAdded', (video, peer) => {
        const id = webrtc.getDomId(peer);
        const html = remoteVideoTemplate({ id });

        let localVideoEl = document.getElementById('local-video')
        let remoteVideoEl = document.getElementById('remote-videos').firstChild

        console.log(localVideoEl)
        console.log(remoteVideoEl)

        $('#allVideos').append(html);
        $(`#${id}`).html(video);
        $(`#${id}`).addClass('ui image large'); // Make video element responsive

        // {{"backgroundColor":"black", "color":"white", "fontSize":"30px", "textAlign":"center", "padding":"12px"}}
        // "backgroundColor: black; color: white; fontSize: 30px; textAlign: center; padding: 12px;"
        document.getElementById(`topStatus`).style['background-color'] = 'black'
        document.getElementById(`topStatus`).style['color'] = 'white'
        document.getElementById(`topStatus`).style['font-size'] = '40px'
        document.getElementById(`topStatus`).style['text-align'] = 'center'
        document.getElementById(`topStatus`).style['padding'] = '12px'
        document.getElementById(`topStatus`).appendChild(document.createElement('BR'))
        document.getElementById(`topStatus`).innerHTML = `Secure Chat`


        document.getElementById(`statusBar`).style['background-color'] = 'black'
        document.getElementById(`statusBar`).style['color'] = 'white'
        document.getElementById(`statusBar`).style['font-size'] = '30px'
        document.getElementById(`statusBar`).style['text-align'] = 'center'
        document.getElementById(`statusBar`).style['padding'] = '12px'
        document.getElementById(`statusBar`).appendChild(document.createElement('BR'))
        document.getElementById(`statusBar`).appendChild(document.createTextNode(`You are now privately chatting with ${this.props.currentFriend.full_name}`))
        document.getElementById(`statusBar`).appendChild(document.createElement('BR'))
        document.getElementById(`statusBar`).appendChild(document.createElement('BR'))

        const hangUpButton = document.createElement('BUTTON')

        hangUpButton.setAttribute('id', 'hangUpButton')
        hangUpButton.innerHTML = 'Hang Up'
        hangUpButton.classList = 'ui button negative'

        document.getElementById(`statusBar`).appendChild(hangUpButton)

        document.getElementById(`allVideos`).style['background-color'] = 'black'

        document.getElementById(`hangUpButton`).addEventListener('click', ()=> {
          window.location.reload()
        })
      });
    }
  }

  render() {
    return (<div style={{"paddingTop":"20px"}}>
      <div id="allVideos" className="video-container">
          <div id="topStatus"></div>
          <span id="remote-videos" className="ui large" style={{"margin":"20px"}}></span>
          <video id="local-video" className="ui large image hidden" style={{"margin":"20px"}} autoplay></video>
          <div className="overlay-desc">
            { (this.props.currentUser && Object.keys(this.props.currentFriend).length !== 0) ?
                <button id="join-btn" className="ui submit green massive transparent button" style={{"opacity":"0.6"}}>Call {this.props.currentFriend.full_name}</button>
                  : null
            }
          </div>
      </div>
      <div id="statusBar"></div>

      <script id="remote-video-template" type="text/x-handlebars-template"></script>
    </div>)
  }
}
