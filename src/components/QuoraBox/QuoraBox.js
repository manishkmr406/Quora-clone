import React from 'react';
import './QuoraBox.css';
import { Avatar } from '@mui/material';


function QuoraBox() {
  return (
    <div className="quoraBox">
    <div className="quoraBox__info">
      <Avatar />
      <h5>username</h5>
    </div>
    <div className="quoraBox__quora">
      <p>What is your question or link?</p>
    </div>
  </div>
  )
}

export default QuoraBox
