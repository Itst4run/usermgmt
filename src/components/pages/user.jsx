import React from 'react'
import "./user.css"
export default function User() {
  return (
    <div className='user'> 
      <div className="userTitleContainer">
          <h1 className="userTitle">EDIT USER</h1>
          <button className='userAddButton'>Create</button>
      </div>
      <div className="userContainer">
          <div className="userShow"></div>
          <div className="userupdate"></div>
          
      </div>
    </div>
  )
}
