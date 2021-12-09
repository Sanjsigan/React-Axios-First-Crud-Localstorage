import React,{useState} from 'react'
import { Button, Checkbox, Form,Message } from 'semantic-ui-react'
import { useHistory } from 'react-router';
import axios from 'axios';

export default function Create(){
  let history = useHistory();
  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName]= useState('');
  const[checkBox, setCheckBox]=useState(false);

  const[formError, setFormError]=useState(true);



  const postDate =()=>{
     console.log(firstName);
     console.log(lastName);
     console.log(checkBox) 

     axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`,{
       firstName,
       lastName,
       checkBox
     })
     .then(()=>{
       setFormError(false);
     })
  
    
  }

  return(
    <Form className="create-form">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=> setCheckBox(!checkBox)} />
    </Form.Field>
    <Button type='submit' onClick={postDate}>Submit</Button> 

    {!formError ? (
            <p>Success Save</p>
          ) : (
           <p>Un success save</p>
          )}
  </Form>
  )
}

