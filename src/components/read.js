import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import { Button, Table } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import '../App.css';


export default function Read (){
 
    const [APIData, setAPIData] = useState([]);
    const [errorMessage, setErrorMessage]=useState('');

  

    useEffect(()=>{
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((response)=>{
            setAPIData(response.data);
        })
    }) 
    const setData =(data)=>{
        let {id, firstName, lastName, checkbox}=data;
        localStorage.setItem('id',id);
        localStorage.setItem('first Name',firstName);
        localStorage.setItem('last Name',lastName);
        localStorage.setItem('check box',checkbox);

    } 
    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
                
             }) 
    } 

 

 

    const onDelete=(id)=>{
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(()=>{
            getData();
            setErrorMessage('Done delete!')           
          
        })
    }
       return(
           <div>
         
              <Table  cell >
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>First Name</Table.HeaderCell>
                      <Table.HeaderCell>Last Name</Table.HeaderCell>
                      <Table.HeaderCell>Cheked</Table.HeaderCell>
                      <Table.HeaderCell>Update</Table.HeaderCell>
                      <Table.HeaderCell>Delete</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>

              <Table.Body>
                  {APIData.map((data)=>{ 
                      return(
                        <Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'checked':'unchecked'}</Table.Cell>
                        <Link to='update'> 
                        <Table.Cell  ><Button color='green' onClick={()=>setData(data)}>Update</Button></Table.Cell>
                        </Link>
                        <Table.Cell><Button color='red' onClick={()=>onDelete(data.id)}>Delete</Button></Table.Cell>
                    </Table.Row>
                      )
                  })}
             
              </Table.Body>
              </Table>
              { <div className="text-danger">{errorMessage}</div>}
           </div>
       )
}