import axios from "axios";
import * as types from "./actionTypes";

const getTodo=(params)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST});
    axios.get('/data',params)
    .then((r)=>dispatch({type:types.GET_DATA_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:types.GET_DATA_FAILURE}))
}

 const addTodo=(params)=>(dispatch,data)=>{
   dispatch({type:types.ADD_DATA_REQUEST});
   axios.post('/data',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
   })
   .then((res)=>dispatch({type:types.ADD_DATA_SUCCESS,payload:res.data}))
   .catch((err)=>dispatch({type:types.GET_DATA_FAILURE}))
}
export default getTodo

 
