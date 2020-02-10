import React from 'react';
import TrendingProfile from './TrendingProfile';

var icon = {
  width: "70px",
  float: "left"
}

function Trends(props){
  return(
    <div>
      <div>
        <TrendingProfile
          username="RagingSockPuppet"/>
      </div>
      <div>
        <TrendingProfile
          username="Mike202382"/>
      </div>
      <div>
        <TrendingProfile
          username="Test"/>
      </div>
      <div>
        <TrendingProfile
          username="Username"/>
      </div>
      <div>
        <TrendingProfile
          username="Username2"/>
      </div>
    </div>
  );
}

export default Trends;
