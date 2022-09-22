import React from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='border'>
<div className='container'>
<Link  className='link' to='/Admin'>Admin</Link>
<Link  className='link' to='/user'>user</Link>
</div>


    </div>
  )
}

export default LandingPage