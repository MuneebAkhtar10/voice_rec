import React from 'react';
import { ReactMic } from 'react-mic';

    const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);

    class AudioList extends React.Component {
        constructor(props){
          super(props)
          this.state = {
            voiceNoteId: [],
          };
        };

        async componentDidMount () {
          const res = await fetch('get_voice_notes', {
          credentials: 'same-origin',
          method: 'GET',
          headers: {
            'Accept': 'application/json, */*'
            }
            }).then(response => response.json());
          for(var i=0;i<res.length;i++) {
            this.state.voiceNoteId.push(res[i].id)
          }
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