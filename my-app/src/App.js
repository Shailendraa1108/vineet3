

import React, { useEffect,useState } from 'react'
import axios from 'axios'





function App(){
    const [users,setUsers]=useState(null)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUsers(res.data))
        .catch((err)=>console.log(err))

    },[])
   
    return(
        users && users.map(user=><div>  {user.company.name}  </div>)
  
       
    )
}
export default App

