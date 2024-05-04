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
    <div className='bg-black p-2'>
      <h2 className='text-center text-light'>Contacts</h2>
      
           <Row className=''>
           {
                users.map((item)=>(
                  <Col sm={12} md={6} lg={4} xl={3} className=''>
                   
                     <div  className="container">
            <div className="shadow border rounded text-center text-black  m-3 " style={{backgroundColor:'whitesmoke'}}>
                      <div >
                      
                      <Link  to={`view/${item.id}`}>
                      <img className='rounded-pill m-2' src="https://th.bing.com/th/id/R.7b528d6309ee84dc0d8fbffef7cc9347?rik=2yRGcUoANndcJQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2fpT7K76y8c.jpg&ehk=DzUoQ28TD73H6PKsFR8wgmg6uljiKEGEuc1oN0pKQj0%3d&risl=&pid=ImgRaw&r=0" alt="" width={'170px'} height={'150px'} />
                      </Link>
                      <h5 className='m-2'>ID : {item.id}</h5> 
                      <h5><img src="https://www.freeiconspng.com/uploads/name-people-person-user-icon--icon-search-engine-1.png" alt="" width={'15px'} className='m-2' />{item.username}</h5>
                      
                      <h5><img src="https://images.vexels.com/media/users/3/137415/isolated/preview/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo-by-vexels.png" alt="" width={'20px'} className='m-2' />{item.phone}</h5>
                    </div>
                      <hr />
                      <div  className='m-2'>
                         <Link style={{textDecoration:'none'}} to={`edit/${item.id}`}><button className='btn'><i className='fa-solid fa-pen fs-5'></i></button></Link>
                         <button  className='btn'><i onClick={()=>deleteEmp(item.id)} className='fa-solid fa-trash fs-5 text-danger'></i></button>
                     </div>
                     </div>
                     </div>
                  
                   </Col>
                ))
              }
                
           </Row>
              
           
<div className='text-center m-3'>
          <Link to={'/add'}><button className='btn btn-success rounded-pill'>Add Contacts</button></Link>
  
</div>
    </div>
  )
}

export default List