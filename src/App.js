import React from 'react';
import Header from './Header/Header.js';
import Chat from './Chat/Chat.js';

export default class App extends React.Component{

    render(){

      return (
        <React.Fragment>
          <Header />

          <Chat />
        
        </React.Fragment>
        
      )
    }

}


