import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css"
export default function User() {
  return (
    <div className='user'> 
      <div className="userTitleContainer">
          <h1 className="userTitle">EDIT USER </h1>
          <Link to="/newUser">
          <button className='userAddButton'>Create </button>
          </Link>
      </div>
      <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
            <img src="https://img.icons8.com/ios-glyphs/60/000000/user--v1.png"/>
            <div className="userShowTopTitle">
              <span className='userShowUsername'>Ana backer</span>
              <span className='userShowUserTitle'>software engineer</span>

            </div>
            </div>
            <div className="userShowBottom">
              <span className='userShowTitle'>Account details</span>
              <div className="userShowInfo">
              <span className='userShowInfoTitle'>Annabeck99</span>
              </div>
              <div className="userShowInfo">
              <img src="https://img.icons8.com/ios/20/000000/planner.png"/>
              <span className='userShowInfoTitle'> 10.12.1999</span>
              </div>
              <div className="userShowInfo">
              <img src="https://img.icons8.com/small/25/000000/android.png"/>
              <span className='userShowInfoTitle'> +1 539877389</span>
              </div>
              <div className="userShowInfo">
              <img src="https://img.icons8.com/ios-filled/25/000000/mail.png"/>
              <span className='userShowInfoTitle'> Annabec99@gmail.com</span>
              </div>
              <div className="userShowInfo">
              <img src="https://img.icons8.com/ios-filled/25/000000/marker.png"/>
              <span className='userShowInfoTitle'> New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userupdate">
           <span className='userUpdateTitle'>Edit</span>
            <form className='userUpdateForm'>
               <div className='userUpdateLeft'>
                 <div className="userUpdateItem">
<label>Username</label>
<input type="text" placeholder='annabeck99' className='userUpdateInput'/>
                 </div>
                 <div className="userUpdateItem">
<label>Full Name</label>
<input type="text" placeholder='annabeck99' className='userUpdateInput'/>
                 </div>
                 <div className="userUpdateItem">
<label>Email</label>
<input type="text" placeholder='annabeck99' className='userUpdateInput'/>
                 </div>
                 <div className="userUpdateItem">
<label>Phone</label>
<input type="text" placeholder='annabeck99' className='userUpdateInput'/>
                 </div>
                 <div className="userUpdateItem">
<label>Address</label>
<input type="text" placeholder='annabeck99' className='userUpdateInput'/>
                 </div>
               </div>
           <div className='userUpdateRight'>
             <button className='userUpdateButton'>Update</button>
           </div>
            </form>
          </div>
          
      </div>
    </div>
  )
}
