import React from 'react'
import presents from '../images/presents.png'


const Navigation = () => {
  return (
    <nav className='container'>
    <div className="logo">
     <img src={presents}  height="40px" width="36px" alt="logo" />
    </div>


    <ul>
     <li href="#">New*</li>
     <li href="#">Popular</li>
     <li href="#">About</li>
    </ul>

    <button>Get App</button>
 </nav>
  )
}

export default Navigation
