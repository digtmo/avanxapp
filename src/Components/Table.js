import { useState } from 'react';
import Table from 'react-bootstrap/Table';

const dataApi = [
    {name:"David Torres",status:"Completado", progress:"100", score:"79", datacompleted:"10/11/2022", certificate:"urlacá"},
    {name:"Cristobal Torres",status:"En Progreso", progress:"50", score:"46", datacompleted:"", certificate:"urlacá"},
    {name:"Fernando Garces",status:"En Progreso", progress:"70", score:"50", datacompleted:"", certificate:"urlacá"},
    {name:"Vicente Marticorena",status:"Sin Iniciar", progress:"0", score:"0", datacompleted:"", certificate:"urlacá"},
    {name:"Lucas Campos",status:"Completado", progress:"100", score:"89", datacompleted:"07/11/2022", certificate:"urlacá"}
  ]

const BasicExample = () => {

    const [alumnos, setAlumnos] = useState(dataApi);

    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Status</th>
              <th>Progreso</th>
              <th>Puntaje</th>
              <th>Completado</th>
              <th>Certificado</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((data) => 
            <tr>
            <td>{data.name}</td>
            <td>{data.status}</td>
            <td>{data.progress}</td>
            <td>{data.score}</td>
            <td>{data.datacompleted}</td>
            <td>{data.certificate}</td>
          </tr>
            )}
            
        {/*     <tr>
              <td> - Unidad 1</td>
              <td colSpan={1}>Completado</td>
              <td colSpan={2}>100</td>
              <td colSpan={3}>54</td>
            </tr> */}
          </tbody>
        </Table>
      )
    
}

export default BasicExample;