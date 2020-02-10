import React from 'react';

var bioBlurb = {
  border: "solid 2px grey",
  padding: "4px",
  margin: "8px"
}

function Bio(){
  return(
    <div style={bioBlurb}>
      <p>This is your bio. If you're able to complete all exercises above with time to spare, try re-creating Airbnb's minimal, clean homepage with React components. Again, don't worry about functionality. Simply practice the act of breaking a multifaceted user interface into React components.</p>
    </div>
  )
}

export default Bio;
