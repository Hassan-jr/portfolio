import React from 'react'
import "./Socials.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


function Socials() {
  return (
    <div className='socials'>
        <h2>My Social Media Accounts</h2>
        <a  href=' https://github.com/Hassan-jr?tab=repositories'>
        <GitHubIcon/> 
         </a>
         <a href='https://www.linkedin.com/in/abdiladif-hassan-524168213'>
         <LinkedInIcon/>
         </a>
         <a href=' https://twitter.com/Hassan_jr_1?t=1Smv-fiNx7iVvsFEoyXvPg&s=09'>
         <TwitterIcon/>
             </a>
             <a href=' https://www.facebook.com/updiladiph.hersonadan'>
             <FacebookIcon/>
             </a>
             <a href=' http://instagram.com/hassan_jr_1?utm_source=qr'>
             <InstagramIcon/>
             </a>

       
        
       
        
       


    </div>
  )
}

export default Socials

