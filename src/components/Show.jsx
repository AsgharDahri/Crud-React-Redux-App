import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { delDoc } from "../Actions";
import Update from "./Update";
const style={
  border: "1px solid black", borderCollapse: "collapse" 
}
const Show = () => {
  const selector = useSelector((state) => state.crudReducer.list);

  const dispatch=useDispatch();

  const [isUpdate, setisUpdate] = useState(false)
  const [Name, setName] = useState('');
  const [ContactNumber, setContactNumber] = useState('');



  const removeItem=(id)=>{
    dispatch(delDoc(id))
  }

  const updateDoc=(n,cn)=>{
    console.log('for updatE: ',cn );
    setisUpdate(true);
    setName(n);
    setContactNumber(cn);
  }
  return (
    <div>
      Show
      <table style={{ }}>
        <tr style={style}>
          <th style={style}>Name </th>
          <th style={style}>Contact Number </th>
          <th style={style}>Action </th>

        </tr>
        {selector.map((item, ind) => {
          return (
            <tr key={ind} style={style}>
              <td style={style}>{item.Name}</td>
              <td style={style}>{item.ContactNumber}</td>
              <button onClick={()=>{removeItem(item.Name)}}>Delete {ind}</button>
              <button onClick={()=>{updateDoc(item.Name,item.ContactNumber)}}>Update {ind}</button>

              
            </tr>
          );
        })}
      </table> 
      {isUpdate && <Update Name={Name} ContactNumber={ContactNumber}/>}
    </div>
  );
};

export default Show;
