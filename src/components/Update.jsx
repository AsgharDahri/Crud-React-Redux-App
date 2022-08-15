import React,{useState} from 'react'
import {updateDoc} from '../Actions/index'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
const Update = ({Name,ContactNumber}) => {
  const dispatch=useDispatch()
  const [Name1, setName] = useState('');
  const [ContactNumber1, setContactNumber] = useState('')
  return (
    <div>
      
      <br/>
      <br/>
      <br/>

      Update
      <br/>
    Name: <input onChange={(e)=>{setName(e.target.value)}} placeholder={Name}/>
    ContactNumber: <input onChange={(e)=>{setContactNumber(e.target.value)}} placeholder={ContactNumber}/>
    <button onClick={()=>dispatch(updateDoc({Name,Name1,ContactNumber1}))}>Update</button>
    </div>
  )
}

export default Update