
import './App.css';
import {GetToken} from './Components/Getoken'
import {Auth } from './Components/Auth';
import React, { Fragment } from 'react';
import { Api } from './Components/Peticion';

function App(props) {
  const [token, setToken] = React.useState('')
  return (
    <Fragment>
      <GetToken
      token={token}
      setToken={setToken}
      />
      <Auth
      token={token}/>
      <Api/>
    </Fragment>
  );
}

export default App;
