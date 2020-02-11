import React from 'react'
import Bio from './Bio'


function Badge(){
  var icon = {
    width: '70px',
    float: 'left'
  }
  return(
    <div>
      <p><img style={icon} alt='profile-picture' src='https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'></img><br/>TEST</p>
      <br/>
      <p>TWEETS FOLLOWING FOLLOWERS</p>
      <Bio/>
    </div>
  )
}

export default Badge
