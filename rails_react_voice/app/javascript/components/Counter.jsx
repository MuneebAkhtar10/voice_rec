import React, { useState} from 'react'
import { Heading } from './Heading'
import { AudioMic } from './AudioMic'
import { AudioList } from './AudioList'
const Counter = () => {

  return (
    <div>
      <Heading/>
      <AudioMic />
      <br></br>
      <h3>Listing here</h3>
      <AudioList />
    </div>
  )
}
export default Counter;