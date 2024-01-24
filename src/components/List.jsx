import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row ,Col} from 'react-bootstrap'

function List() {
  const base_url='http://localhost:8000'

  const[users,setusers]=useState([])

  const fetchData=async()=>{
    const result=await axios.get(`${base_url}/get-user`)
    console.log(result.data.users);
    setusers(result.data.users)
  }
  const deleteEmp=async(id)=>{
    const result1 = await axios.delete(`${base_url}/delete-user/${id}`)
    console.log(result1);
    alert(result1.data.message)
    fetchData()
  }

  console.log(users);

  useEffect(()=>{
    fetchData()
  },[])

  
  return (
    <div>
      <h2 className='text-center'>Contacts</h2>
      
           <Row>
           {
                users.map((item)=>(
                  <Col sm={12} md={6} lg={4} xl={3}>
                   
                     <div  className="container">
            <div className="shadow border rounded text-center m-3">
                      <div >
                      
                      <Link  to={`view/${item.id}`}>
                      <img className='rounded-pill m-2' src={item.img} alt="" width={'150px'} />
                      </Link>
                      <h5 className='m-2'>ID : {item.id}</h5> 
                      <h5><img src="https://www.freeiconspng.com/uploads/name-people-person-user-icon--icon-search-engine-1.png" alt="" width={'15px'} className='m-2' />{item.username}</h5>
                      
                      <h5><img src="https://images.vexels.com/media/users/3/137415/isolated/preview/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo-by-vexels.png" alt="" width={'20px'} className='m-2' />{item.phone}</h5>
                    </div>
                      <hr />
                      <div  className='m-2'>
                         <Link style={{textDecoration:'none',color:'black'}} to={`edit/${item.id}`}><button className='btn'><i className='fa-solid fa-pen fs-5'></i></button></Link>
                         <button onClick={()=>deleteEmp(item.id)} className='btn'><i className='fa-solid fa-trash fs-5'></i></button>
                     </div>
                     </div>
                     </div>
                  
                   </Col>
                ))
              }
                
           </Row>
              
           
<div className='text-center m-3'>
          <Link to={'/add'}><button className='btn btn-info rounded-pill'>Add Contacts</button></Link>
  
</div>
    </div>
  )
}

export default List