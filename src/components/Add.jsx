import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Add() {

  const location = useNavigate()

  const [id,setid]=useState("")
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [phone,setphone]=useState("")
  const [address,setaddress]=useState("")
  const [img,setimg]=useState("")

  const base_url = 'http://localhost:8000/add-user'
  const addEmployee=async(e)=>{
    //add employee - Api call
    console.log(id,username,email,phone,address,img);
    const body={id,username,email,phone,address,img}
    const result=await axios.post(base_url,body)
    .then((result)=>{
      console.log(result);
      alert(result.data.message)
      location('/list')
    }).catch((error)=>{
      alert('please enter a unique id')
    })
  }
  return (
    <div>
      <h2 className='text-center m-3'>Add Contact</h2>
      <div className="row">
        <div className="col-3"></div>
      <div className="col-6 container text-center m-3 p-3 border rounded shadow">
      <label>
       <input type="file" style={{display:'none'}} />
       <img className='rounded-pill' onChange={(e)=>setimg(e.target.value)} src="https://genmar.co.uk/wp-content/uploads/2021/11/Cameron.png" alt="" width={'150px'} />
       </label>
        
         
        <MDBInput label='ID' onChange={(e)=>setid(e.target.value)} className='shadow'  id='form' type='text' />
        <br />
        <MDBInput label='Name' onChange={(e)=>setusername(e.target.value)} className='shadow'  id='form' type='text' />
        <br />
        <MDBInput label='Email' onChange={(e)=>setemail(e.target.value)} className='shadow'  id='form' type='text' />
          <br />
        <MDBInput label='PhoneNo.' onChange={(e)=>setphone(e.target.value)} className='shadow'  id='form' type='number' />
        <br />
        <MDBInput label='Address' onChange={(e)=>setaddress(e.target.value)} className='shadow'  id='form' type='text' />
        <br />
        <button className='btn btn-success m-2' onClick={(e)=>addEmployee(e)}>Add</button>
      </div>
      <div className="col-3"></div>
      </div>
     
    </div>
  )
}

export default Add