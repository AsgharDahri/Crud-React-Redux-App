//actions wiill be defined

export const addDoc=(data)=>{
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    
    return {
        type:'ADD',
        payload:{
            Name:data.Name,
            ContactNumber:data.ContactNumber
        }
        
    }
}



export const delDoc=(id)=>{
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    
    return {
        type:'DEL',
        payload:{
       
            id:id
        }
        
    }
}
export const updateDoc=(data)=>{
    console.log('=============Update ACtion=======================');
    console.log('from action: ',data);
    console.log('====================================');
    
    return {
        type:'UPDATE',
        payload:{
            id:data.Name,
            Name1:data.Name1,
            ContactNumber1:data.ContactNumber1
        }
        
    }
}

