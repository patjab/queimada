import React, {Fragment, Component} from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

// express handlebars jquery semantic-ui-css simplewebrtc

import $ from 'jquery'
import Handlebars from 'handlebars'
import SimpleWebRTC from 'simplewebrtc'
import {validation} from 'jquery-validation'

export default class Preapp extends Component {
  componentDidMount() {
      // Chat platform
      const chatTemplate = Handlebars.compile($('#chat-template').html());
      const chatContentTemplate = Handlebars.compile($('#chat-content-template').html());
      const chatEl = $('chat');
      const formEl = $('.form');

      const messages = [];
      let username = (("" + new Date()).slice(16,24) + Math.random());

      // Local Video
      const localImageEl = $('#local-image');
      const localVideoEl = $('#local-video');

      // Remote Videos
      const remoteVideoTemplate = Handlebars.compile($('#remote-video-template').html());
      const remoteVideosEl = $('#remote-videos');
      let remoteVideosCount = 0;

      // Add validation rules to Create/Join Room Form
      // LOOK
      formEl.validate({
        fields: {
          roomName: 'empty',
          username: 'empty',
        },
      });

      // create our WebRTC connection
      const webrtc = new SimpleWebRTC({
        // the id/element dom element that will hold "our" video
        localVideoEl: 'local-video',
        // the id/element dom element that will hold remote videos
        remoteVideosEl: 'remote-videos',
        // immediately ask for camera access
        autoRequestMedia: true,
      });

        // We got access to local camera
        webrtc.on('localStream', () => {
          localImageEl.hide();
          localVideoEl.show();
        });

        $('.submit').on('click', (event) => {
        if (!formEl.validate('is valid')) {
          return false;
        }
        username = $('#username').val();
        const roomName = $('#roomName').val().toLowerCase();
        if (event.target.id === 'create-btn') {
          createRoom(roomName);
        } else {
          joinRoom(roomName);
        }
        return false;
      });

      // Register new Chat Room
      const createRoom = (roomName) => {
        console.info(`Creating new room: ${roomName}`);
        webrtc.createRoom(roomName, (err, name) => {
          showChatRoom(name);
          postMessage(`${username} created chatroom`);
        });
      };

      // Join existing Chat Room
      const joinRoom = (roomName) => {
        console.log(`Joining Room: ${roomName}`);
        webrtc.joinRoom(roomName);
        showChatRoom(roomName);
        postMessage(`${username} joined chatroom`);
      };

      // Post Local Message
      const postMessage = (message) => {
        const chatMessage = {
          username,
          message,
          postedOn: new Date().toLocaleString('en-GB'),
        };
        // Send to all peers
        webrtc.sendToAll('chat', chatMessage);
        // Update messages locally
        messages.push(chatMessage);
        $('#post-message').val('');
        updateChatMessages();
      };

      // Display Chat Interface
      const showChatRoom = (room) => {
        // Hide form
        formEl.hide();
        const html = chatTemplate({ room });
        chatEl.html(html);
        const postForm = $('form');
        // Post Message Validation Rules
        postForm.validate({
          message: 'empty',
        });
        $('#post-btn').on('click', () => {
          const message = $('#post-message').val();
          postMessage(message);
        });
        $('#post-message').on('keyup', (event) => {
          if (event.keyCode === 13) {
            const message = $('#post-message').val();
            postMessage(message);
          }
        });
      };

      // Update Chat Messages
      const updateChatMessages = () => {
        const html = chatContentTemplate({ messages });
        const chatContentEl = $('#chat-content');
        chatContentEl.html(html);
        // automatically scroll downwards
        const scrollHeight = chatContentEl.prop('scrollHeight');
        chatContentEl.animate({ scrollTop: scrollHeight }, 'slow');
      };

      // Receive message from remote user
      webrtc.connection.on('message', (data) => {
        if (data.type === 'chat') {
          const message = data.payload;
          messages.push(message);
          updateChatMessages();
        }
      });

      // Remote video was added
      webrtc.on('videoAdded', (video, peer) => {
        const id = webrtc.getDomId(peer);
        const html = remoteVideoTemplate({ id });
        if (remoteVideosCount === 0) {
          remoteVideosEl.html(html);
        } else {
          remoteVideosEl.append(html);
        }
        $(`#${id}`).html(video);
        $(`#${id} video`).addClass('ui image medium'); // Make video element responsive
        remoteVideosCount += 1;
      });


  }

  render() {
    return (<Fragment>

      <div className="ui container">
        <h1 className="ui header">Simple WebRTC Messenger</h1>
        <hr/>
      </div>

      <div className="ui two column stackable grid">
        <div className="ui ten wide column">
          <div className="ui segment">
            <div className="ui form">

            <div className="fields">
              <div className="field">
                <label>User Name</label>
                <input type="text" placeholder="Enter user name" id="username" name="username"/>
              </div>
              <div className="field">
                <label>Room</label>
                <input type="text" placeholder="Enter room name" id="roomName" name="roomName"/>
              </div>
            </div>
            <br/>
            <div className="ui buttons">
              <div id="create-btn" className="ui submit orange button">Create Room</div>
              <div className="or"></div>
              <div id="join-btn" className="ui submit green button">Join Room</div>
            </div>

            </div>
            <div id="chat"></div>
          </div>
        </div>
      </div>

      <div className="ui six wide column">
        <h4 className="ui center aligned header">
        Local Camera
        </h4>
        <img id="local-image" className="ui large image" src="http://i.imgur.com/vZmZJ2o.png"/>
        <video id="local-video" className="ui large image hidden" autoplay></video>
      </div>

      <h3 className="ui center aligned header">Remote Cameras</h3>
      <div id="remote-videos" className="ui stackable grid">
        <div className="four wide column">
          <img className="ui centered medium image" src="http://i.imgur.com/vZmZJ2o.png"/>
        </div>
        <div className="four wide column">
          <img className="ui centered medium image" src="http://i.imgur.com/vZmZJ2o.png"/>
        </div>
        <div className="four wide column">
          <img className="ui centered medium image" src="http://i.imgur.com/vZmZJ2o.png"/>
        </div>
        <div className="four wide column">
          <img className="ui centered medium image" src="http://i.imgur.com/vZmZJ2o.png"/>
        </div>
      </div>

      <script id="chat-template" type="text/x-handlebars-template">
        <h3 className="ui orange header">Room ID -> <strong>some room</strong></h3>
        <hr/>
        <div id="chat-content" className="ui feed"> </div>
        <hr/>
        <div className="ui form">
          <div className="ui field">
            <label>Post Message</label>
            <textarea id="post-message" name="post-message" rows="1"></textarea>
          </div>
          <div id="post-btn" className="ui primary submit button">Send</div>
        </div>
      </script>

      <script id="chat-content-template" type="text/x-handlebars-template">
          <div className="event">
          {each messages}
            <div className="label">
              <i className="icon blue user"></i>
            </div>
            <div className="content">
              <div className="summary">
                <a href="#"> {username} </a> posted on
                <div className="date">
                  {postedOn}
                </div>
              </div>
              <div className="extra text">
                {message}
              </div>
            </div>
          </div>
        {each}
      </script>

      <script id="remote-video-template" type="text/x-handlebars-template">
        <div id="{{ id }}" className="four wide column"></div>
      </script>

      <script src="scripts/jquery/dist/jquery.min.js"></script>
      <script src="scripts/semantic-ui-css/semantic.min.js"></script>
      <script src="scripts/handlebars/dist/handlebars.min.js "></script>
      <script src="scripts/simplewebrtc/out/simplewebrtc-with-adapter.bundle.js"></script>
      <script src="js/app.js"></script>
      <link rel="stylesheet" href="scripts/semantic-ui-css/semantic.min.css"/>
    </Fragment>)
  }
}
