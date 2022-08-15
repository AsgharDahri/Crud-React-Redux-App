
const initialList={
    list:[]
}

const crudReducer=(state=initialList,action)=>
{
    switch (action.type) {
        case 'ADD':
            const {Name, ContactNumber}=action.payload;
            // console.log('==============FROM REDUCER======================');
            // console.log(Name, ContactNumber);
            // console.log('==============FROM REDUCER======================');

            console.log(state);
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        Name:Name,
                        ContactNumber:ContactNumber,
                    }
                ]
            }
            break;
        case 'DEL':
        const newList=state.list.filter((elem)=>elem.Name!==action.payload.id);

            return{ 
                ...state,
                list:newList
            }

        case 'UPDATE':
            const nList=state.list.filter((elem)=>elem.Name!==action.payload.id);

            state={ 
                ...state,
                list:nList
            }
            
            // const {Name, ContactNumber}=action.payload;
             return {
                ...state,
                list:[
                    ...state.list,
                    {
                        Name:action.payload.Name1,
                        ContactNumber:action.payload.ContactNumber1,
                    }
                ]
            }
            // console.log('====================================');
            // console.log('From Update Reducer: ',state);
            // console.log('====================================');
            // return state;
            break;
        default:
            return state;
            break;
    }
}

export default crudReducer;