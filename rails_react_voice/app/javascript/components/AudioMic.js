import React from 'react';
import { ReactMic } from 'react-mic';
import axios from 'axios'

    const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);

    class AudioMic extends React.Component {
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

        onStart = () => {
          console.log('You can tap into the onStart callback');
        }

        onStop = (blobAudio) => {
          this.setState({
            blobAudio: blobAudio,
            blobURL: blobAudio.blobURL
          });
        };

        onUpload= () => {
          let reader = new FileReader()
          reader.onload = (event) => {
          //save audio blob in FormData and use FileReader to get into proper format
          let formData  = new FormData();
          formData.append('audio', event.target.result);
          fetch('add_voice_to_storage', {
            credentials: 'same-origin',
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json, */*'
              }
              }).then(response => {
              if (response.ok) {
                return response;
              }
              else {
                let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
                throw(error);
              }
            })
            .then(response => response.json())
            .then(body => {
              console.log('MADE IT HERE');
              console.log(body);
            })
            .catch(error => console.error(`Error in fetch: ${error.message}`));
          };
            reader.readAsDataURL(this.state.blobAudio.blob);
        };

        componentDidMount = () => {
          if(!hasGetUserMedia) {
            alert('Your browser cannot stream from your audio. Please switch to Chrome or Firefox.');
          }
        };

        render() {
          return (
            <div>
            <ReactMic
              className='oscilloscope'
              record={ this.state.recordAudio }
              backgroundColor='#0B4ADC'
              visualSetting='sinewave'
              audioBitsPerSecond= { 128000 }
              onStop={ this.onStop }
              onStart={ this.onStart }
              strokeColor='#000000'
                    />
            <div>
              <audio ref='audioSource' controls='controls' src={ this.state.blobURL }></audio>
            </div>
                <button onClick={ this.startRecording }> Start Recording</button>
                <button onClick={ this.stopRecording }> Stop Recording</button>
                <button onClick={ this.onUpload }>Upload</button>      
            </div>
        );
    };
};

export { AudioMic }