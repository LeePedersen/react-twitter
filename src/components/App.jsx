import React from 'react'
import Header from './Header'
import Feed from './Feed'
import Badge from './Badge'
import Trends from './Trends'

var header = {
  width: '100%',
  marginBottom: '16px'
}

var leftColumn = {
  width: '32%',
  float: 'left',
  border: '2px solid grey'
}

var middleColumn = {
  width: '32%',
  marginLeft: '33.5%',
  position: 'absolute',
  border: '1px solid grey'
}

var rightColumn = {
  width: '32%',
  // marginLeft: '65%',
  border: '2px solid grey',
  float: 'right'
}

function App(){
  return (
    <div className='row'>
      <div style={header}>
        <Header/>
      </div>
      <div style={leftColumn}>
        <Badge/>
      </div>
      <div style={middleColumn}>
        <Feed/>
      </div>
      <div style={rightColumn}>
        <Trends/>
      </div>
    </div>
  )
}

export default App
