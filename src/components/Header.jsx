
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

function Header() {
    const [openBasic, setOpenBasic] = useState(false);
  return (
    <div>
<MDBNavbar expand='lg' bgColor='primary disabled'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src="https://cdn-1.webcatalog.io/catalog/constant-contact/constant-contact-icon.png" alt="" width={'50px'} /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className=' text-light mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' className='text-dark' href='#'>
                <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' className='text-light' href='#'>
                Features
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' className='text-light' href='#'>
              <Link style={{textDecoration:'none',color:'white'}} to={'/list'}>Contacts</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
           

           
          </MDBNavbarNav>

       <div className='d-flex m-4 p-3'>
         <div className='m-2'>
         <button className='btn btn-info rounded'>Signin</button>
         </div>
         <div className='m-2'>
         <button className='btn btn-success rounded'>Signup</button>
         </div>
       </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header