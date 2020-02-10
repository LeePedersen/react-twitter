import React from 'react';

function TweetInput(){
  var icon = {
    width: "70px",
    // position: "absolute"
  }

  var tweetInput = {
    marginBottom: "10px",
    marginLeft: "20px",
    padding: "4px",
    textAlign: "center",
    border: "2px solid lightblue"
  }

  return(
    <div>
      <img style={icon} src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"></img>
      <input style={tweetInput} placeholder="What's happening?"></input>
    </div>
  );
}

export default TweetInput;
