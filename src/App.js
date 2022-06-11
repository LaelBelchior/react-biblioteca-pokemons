import React from 'react';
import './App.css';
import Home from './Components/Home'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App() {
  return (
    <Authenticator>
      {({signOut, user}) => (
        <div className='authenticator-container'>
          <Home />
          <button className='authenticator-button' onClick={signOut}>Sair</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
