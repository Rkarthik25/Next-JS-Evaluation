import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    
       <div style={{backgroundColor:"black",height:"70px",color:"white",gap:"20px"}}>
         <Link href='/'>Karthikeyan Rajan</Link> 
      <Link href='/projects'>projects</Link>
      <Link href='/Experience'>Experience</Link>
      </div>
   
  )
}

export default Navbar