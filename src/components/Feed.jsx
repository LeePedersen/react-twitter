import React from 'react';
import Tweet from "./Tweet";
import TweetInput from './TweetInput'

function Feed(){
  return(
    <div>
      <TweetInput/>
      <div>
        <Tweet
          name="User Name"
          content="I am writing lots of words"/>
      </div>
      <div>
        <Tweet
          name="Other Name"
          content="I am writing lots of words"/>
      </div>
      <div>
        <Tweet
          name="Another Name"
          content="I am writing lots of words"/>
      </div>
      <div>
        <Tweet
          name="Yet Other Name"
          content="I am writing lots of words"/>
      </div>
      <div>
        <Tweet
          name="Name Name"
          content="I am writing lots of words"/>
      </div>
    </div>
  );
}

export default Feed;
