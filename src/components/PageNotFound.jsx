import React from 'react'
import TitleImage from '../image/1705893378719-01.jpeg.jpg'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <img src={TitleImage} alt="" width={'100%'} />

<div style={{position:'absolute',textAlign:'center',position:'revert-layer',backgroundColor:'white',padding:'10px'}}>
<Link to={'/'}>        <button className='btn btn-dark rounded'>Back to Home</button></Link>
  
</div> 

   </div>
  )
}

export default PageNotFound