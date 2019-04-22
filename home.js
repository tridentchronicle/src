import React from 'react';
import BackgroundHeader from "./bgr.jpg";

const BackgroundHead = {
  backgroundImage: 'url('+ BackgroundHeader+')',
  width: '100%',
  height: '600px',
  backgroundSize: 'cover'
  }
 

class Home extends React.Component {
  render() {
    return (
      <div style={BackgroundHead}>
	 HOME
      </div>
    );
  }
}

export default Home;
