import React, { Component } from 'react';

class MessageBoard extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div id="message_board" >
          <div id="message_log"></div>
          <input id="message_box" name="chat" type="text" />
          <input id="message_post" value="post" type="submit" />
        </div>
      </div>
    )
  }
}

export default MessageBoard;