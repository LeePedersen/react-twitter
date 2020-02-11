import React from 'react'
import PropTypes from 'prop-types'

function TrendingProfile(props){
  var icon = {
    width: '70px',
    float: 'left'
  }
  return(
    <p>
      <img style={icon} src='https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'></img> <br/>
      {props.username}<br/>
      <button>Button</button>
    </p>
  )
}

TrendingProfile.propTypes = {
  username: PropTypes.string
}

export default TrendingProfile
