import React,{useState} from 'react'
import { useDispatch,useSelector} from 'react-redux';

import {addDoc} from '../Actions/index'
const Add = () => {
  const [Name, setName] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const selector=useSelector((state)=>state.crudReducer.list);
  console.log('====================================');
  console.log(selector);
  console.log('====================================');
  const dispatch=useDispatch();

  const dispatchDate=()=>{
    dispatch(addDoc({Name,ContactNumber})); 
    setContactNumber('');
    setName('')
  }
  return (
    <div><br/><br/>
      Add
<br/><br/>
      Name: <input type='text' onChange={(e)=>{setName(e.target.value)}}/> <br/><br/>
      Contact Number: <input type='tel'  onChange={(e)=>{setContactNumber(e.target.value)}}/>
      <br/><br/>
      {/* <button onClick={()=>{dispatch(addDoc({Name,ContactNumber})); setContactNumber('');setName('')}}>Add Doc</button> */}
      <button onClick={dispatchDate}>Add Doc</button>


      {/* <h1></h1> */}
    </div>
  )
}

export default Add