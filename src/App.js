import './App.css';
import {GetToken} from './Components/Getoken'
import {Auth } from './Components/Auth';
import React, { Fragment } from 'react';
import { Api } from './Components/Peticion';
import BasicExample from './Components/Table'
/* import {contador} from './Components/Indicadores'; */

const dataApi = [
  {name:"David Torres",status:true, progress:"100%", score:"79", datacompleted:"10/11/2022", certificate:"urlacá"},
  {name:"Cristobal Torres",status:false, progress:"50%", score:"46", datacompleted:"", certificate:"urlacá"},
  {name:"Fernando Garces",status:false, progress:"70%", score:"50", datacompleted:"", certificate:"urlacá"},
  {name:"Vicente Marticorena",status:false, progress:"20%", score:"79", datacompleted:"", certificate:"urlacá"},
  {name:"Lucas Campos",status:true, progress:"100%", score:"89", datacompleted:"07/11/2022", certificate:"urlacá"}
]

const enrrollementCourse = dataApi.length

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
      <h1>Table bootstrap</h1>
      <BasicExample/>
      <contador
      dataApi={enrrollementCourse}
      />
      <h1>Table UI</h1>
    </Fragment>

  );
}

export default App;
