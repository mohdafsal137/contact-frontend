
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
<MDBNavbar expand='lg' bgColor='black'>
      <MDBContainer fluid>
<h3 className='text-light'>YETI</h3>
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
              
            </MDBNavbarItem>
            <MDBNavbarItem>
             
            </MDBNavbarItem>
            <MDBNavbarItem>
              
            </MDBNavbarItem>
           

           
          </MDBNavbarNav>

       <div className='d-flex m-4 p-5' >
       <MDBNavbarLink active aria-current='page' className='text-dark' href='#'>
                <Link style={{textDecoration:'none',color:'white'}} className='p-2' to={'/'}>Home</Link>
              </MDBNavbarLink>

              <MDBNavbarLink active aria-current='page' className='text-light' href='#'>
                <Link style={{textDecoration:'none',color:'white'}} className='p-2'>Features</Link>
              </MDBNavbarLink>

              <MDBNavbarLink active aria-current='page' className='text-light' href='#'>
              <Link style={{textDecoration:'none',color:'white'}} className='p-2' to={'/list'}>Contacts</Link>
              </MDBNavbarLink>

       </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header