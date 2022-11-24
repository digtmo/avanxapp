import React from 'react'
import { Table } from 'semantic-ui-react'



const TableData = ({dataApi}) => (    
    dataApi.map((data) =>
<Table celled>
<Table.Header>
    <Table.Row>
      <Table.HeaderCell>Nombre</Table.HeaderCell>
      <Table.HeaderCell>Estado</Table.HeaderCell>
      <Table.HeaderCell>Progreso</Table.HeaderCell>
      <Table.HeaderCell>Puntaje</Table.HeaderCell>
      <Table.HeaderCell>Fecha Certicado</Table.HeaderCell>
      <Table.HeaderCell>Certicado</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  
    <Table.Body>
    <Table.Row key={data.name}>
      <Table.Cell >{data.name}</Table.Cell>
      <Table.Cell>{data.status}</Table.Cell>
      <Table.Cell>{data.progress}</Table.Cell>
      <Table.Cell>{data.score}</Table.Cell>
    </Table.Row>
  </Table.Body>

  </Table>
))


export {TableData};