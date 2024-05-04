import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

function Admin() {
  return (
    <div style={{backgroundColor:'black',padding:'200px'}} className='im'>
       <div className='text-center' >
       
       <h1 className='text-white text-center'>CONTACT YETI</h1>
        <p className='text-white text-center'>Whether you’re at home or in the wild we are here for you. There is a good chance your question has been answered before, see the topics below for helpful information.</p>
  
  <Link to={'/list'}>
  <button className='btn btn-primary'>View Details</button>
  
  </Link>
  
       </div>
      </div>
  )
}

export default Admin