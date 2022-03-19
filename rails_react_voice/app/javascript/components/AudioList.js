import React from 'react';
import { ReactMic } from 'react-mic';

    const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);

    class AudioList extends React.Component {
        constructor(props){
          super(props)
          this.state = {
            recordAudio: false,
            blobAudio: null,
            blobURL: null
          };
        };

        startRecording = () => {
          this.setState({
            recordAudio: true
          });
        }

        stopRecording = () => {
          this.setState({
            recordAudio: false
          });
        }

        onStop = (blobAudio) => {
          this.setState({
            blobAudio: blobAudio,
            blobURL: blobAudio.blobURL
          });
        };

        getAllVoiceNotes= () => {
          fetch('voicenotes', {
            credentials: 'same-origin',
            method: 'GET',
            headers: {
              'Accept': 'application/json, */*'
              }
              }).then(response => {
              if (response.ok) {
                return response;
              }
            })
        };

        componentDidMount = () => {
          this.getAllVoiceNotes()
          
        };

        render() {
          return (
            <div>
              <audio ref='audioSource' controls='controls' src={ this.state.blobURL }></audio>
            </div>
        );
    };
};

export { AudioList }