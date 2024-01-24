import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div style={{backgroundColor:'white'}}>
        <div className='row'>
          <div  className="col-5 text-center m-4 p-3">
            
          <div style={{width:'700px',textAlign:'center'}} className="col-5 rounded shadow m-2 p-2">
                <h1 className='text-center'>Contact App</h1>
                <p style={{textAlign:'justify',padding:'7px'}}>Contacts+ can help you keep track of friends, family and professional contacts while keeping your address book uncluttered. The app uses a cloud-based system that can sync with Gmail, Outlook and iCloud, automatically pulling data from your connected accounts. It can then suggest deleting duplicates, making updates and enriching contacts with photos, company info, social media activity, and more. Contacts+ combines the Contacts+ and Full Contact mobile apps into a single contacts management powerhouse. </p>
            </div>
          
<div className='m-4'>
             <Link to={'/list'}> <button className='btn btn-success rounded'>View All Contacts</button></Link>
  
</div>        

  </div>
<div className="col-1"></div>
<div className='col-5 m-4 p-3 '>
            <img className='rounded' src="https://cdn.dribbble.com/users/1401309/screenshots/3559819/drizzlesms.gif" alt="" width={'100%'} />
          </div>
            <div className="col-1"></div>
         
        </div>
      </div>
  )
}

export default Admin