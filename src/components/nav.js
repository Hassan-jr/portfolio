import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import "./nav.css";
import logo from '../img/logo.png';

function Nav() {
       const [show, setshow] = useState(false)
       function handleClick (){
         setshow(!show)
       }
  return (
    <div className='nav'> 
    
    <div className='right'>
      {/* <h1 className='logo'>Hassan-jr</h1> */}
      <img className='logo' src={logo} alt='logo'/>
    </div>
    
        <ul className='left' >
        <div  className='navitems' id = {show ? "hidden" : ""} >
           <li className='item'>
              <Link to ="home" spy={true} smooth={true} offset={0} duration={500}  >Home</Link>
            </li>
            <li className='item'>
              <Link to ="about" spy={true} smooth={true} offset={0} duration={500}  >About</Link>
            </li>
            <li className='item'>
              <Link to ="resume" spy={true} smooth={true} offset={0} duration={500}  >Resume</Link>
            </li>
            <li className='item'>
              <Link to ="testmonials" spy={true} smooth={true} offset={0} duration={500}  >Testmonials</Link>
            </li>
            <li className='item'>
              <Link to ="contacts" spy={true} smooth={true} offset={0} duration={500}  >Contacts</Link>
            </li>
            </div>

            <button className='navbtn' onClick={handleClick}>
              <MenuIcon/>
            </button>
        </ul>
    
   

      
    </div>
  )
}

export default Nav;
