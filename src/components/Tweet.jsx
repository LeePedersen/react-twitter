import React from 'react'
import PropTypes from 'prop-types'

function Tweet(props){
  var icon = {
    width: '70px',
    float: 'left'
  }

  var tweetBox = {
    border: 'solid 1px grey'
  }

  return(
    <div style={tweetBox}>
      <p><img style={icon} alt='profile-picture' src='https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'></img><br/>{props.name}<br/>{props.content}</p>
    </div>
  )
}

Tweet.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string
}

export default Tweet
