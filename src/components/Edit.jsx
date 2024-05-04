import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';

function Edit() {
//to hold updated values
const [eid,setId]=useState("")
   const [conusername,setUsername]=useState("")
   const [conphone,setPhone]=useState("")
   const [conemail,setEmail]=useState("")
   const[address,setaddress]=useState("")

     const {id}=useParams()
     console.log(id);//4
 
   const viewCon=async(id)=>{
     const result = await axios.get(`${base_url}/view-user/${id}`)
     console.log(result.data.users);//object
     setId(result.data.users.id)
     setUsername(result.data.users.username)
     setPhone(result.data.users.phone)
     setEmail(result.data.users.email)
     setaddress(result.data.users.address)
   }
   useEffect(()=>{
     viewCon(id)
   },[])
 
   const location= useNavigate()
 
 //update function
     const base_url='http://localhost:8000'
     //api call to update an employee details
     const updateContact=async(e)=>{
       e.preventDefault()
       const body={
         eid:eid,
         username:conusername,
         phone:conphone,
         email:conemail,
         address:address
       }
         const result= await axios.post(`${base_url}/update-user/${id}`,body)
         console.log(result);
         alert(result.data.message)
         location('/list')
     }

  return (
    <div className='bg-black p-2'>
      <h2 className='text-center text-light m-3'>Edit Contact</h2>
      <div className="row">
        <div className="col-3"></div>
      <div className="col-6 container text-center m-3 p-3 bg-light border rounded shadow">
      <label>
       <input type="file" style={{display:'none'}} />
       <img className='rounded-pill m-2'  src="https://genmar.co.uk/wp-content/uploads/2021/11/Cameron.png" alt="" width={'150px'} />
       </label>        
         
        <MDBInput label='ID' onChange={(e)=>setId(e.target.value)} value={eid} className='shadow'  id='form' type='text' />
        <br />
        <MDBInput label='Name' onChange={(e)=>setUsername(e.target.value)} value={conusername} className='shadow'  id='form' type='text' />
        <br />
        <MDBInput label='Email' onChange={(e)=>setEmail(e.target.value)} value={conemail} className='shadow'  id='form' type='text' />
          <br />
        <MDBInput label='PhoneNo.'onChange={(e)=>setPhone(e.target.value)} value={conphone} className='shadow'  id='form' type='text' />
        <br />
        <MDBInput label='Address'onChange={(e)=>setaddress(e.target.value)} value={address} className='shadow'  id='form' type='text' />
        <br />
        <button onClick={(e)=>updateContact(e)} className='btn btn-warning m-2'>Edit<i className='fa-solid fa-pen'></i></button>
      </div>
      <div className="col-3"></div>
      </div>
     
    </div>
  )
}

export default Edit