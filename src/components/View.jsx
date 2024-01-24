import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function View() {
  const[data,setdata]=useState({})
  const base_url='http://localhost:8000'

  const {id}= useParams()
  console.log(id);
  const viewEmp=async(id)=>{
    const result2=await axios.get(`${base_url}/view-user/${id}`)
    console.log(result2.data.users);
    setdata(result2.data.users)
  }
console.log(data);
  useEffect(()=>{
    viewEmp(id)
  },[])
  return (
    <div>
      <div className="container">
        <div className='row'>
          <div className="col-3"></div>
          {<div className="col-6 border shadow m-4 p-3 text-center">
          <img src={data.img} className='rounded-pill m-2' alt="" width={'200px'} />
          <h4>ID : {data.id}</h4>
            <h4><img src="https://www.freeiconspng.com/uploads/name-people-person-user-icon--icon-search-engine-1.png" alt="" width={'15px'} className='m-2' />Name : {data.username}</h4>
            <h4> <img src="https://pngimg.com/uploads/email/email_PNG11.png" alt="" width={'25px'} className='m-2' />Email : {data.email}</h4>
            <h4><img src="https://images.vexels.com/media/users/3/137415/isolated/preview/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo-by-vexels.png" alt="" width={'20px'} className='m-2' />Phone No. : {data.phone}</h4>
            <h4> <img src="https://th.bing.com/th/id/R.0c465d27fefa36e88ca147b19cc3f720?rik=PbyHmJ4n0MynUQ&riu=http%3a%2f%2fclipground.com%2fimages%2fwmap-clipart-10.jpg&ehk=o3e8bWBRvtLate6DHPoJHGHXKVOGUHYS0ZIFcpAASHk%3d&risl=&pid=ImgRaw&r=0" alt="" width={'25px'} className='m-2' />Address : {data.address}</h4>
          
          </div>
          }
          <div className="col-3 m-3">
<Link to={'/list'}>            <button className='btn btn-dark rounded text-center'>Go Back</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View