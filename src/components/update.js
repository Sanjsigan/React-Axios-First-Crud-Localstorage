import React,{useState, useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router';
import axios from 'axios';



export default function Update(){
    let history= useHistory();
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const[checkBox, setCheckBox]=useState(false);
    const [id, setId]= useState(null);

    useEffect(() => {
       setId(localStorage.getItem('id'))
       setFirstName(localStorage.getItem('first Name'))
       setLastName(localStorage.getItem('last Name'))
       setCheckBox(localStorage.getItem('check box'))
       
    }, []) 

    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
            firstName,
             lastName,
             checkBox
        }) 
        .then(()=>{
            history.push('/read');
        }) 
    }


    return(
        <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' checked={checkBox} onChange={(e)=> setCheckBox(!checkBox)} />
        </Form.Field>
        <Button  type='submit' onClick={updateAPIData}>Submit</Button>
      </Form>
    )
}