import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';


function App(props) {
    
  return (
    <div>
    <Participant />
    <Stage />
    <Chat />
    </div>
  );
}

export default App;
