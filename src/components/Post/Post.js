import React from 'react';
import './Post.css';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Avatar } from '@mui/material';

function Post() {
  return (
    <div
    className="post">
    <div className="post__info">
      <Avatar />
      <h4>username</h4>
      <small>Timestamp</small>
    </div>
    <div className="post__body">
      <div className="post__question">
        <p>question</p>
        <button
          className="post__btnAnswer">
          Answer
        </button>
      </div>
      <div className="post__answer">
        <p></p>    
      </div>
      <img src="https://qph.cf2.quoracdn.net/main-thumb-t-2248-100-opFZMCZKBFoTLdRD2XJi9elSvYTpDi0C.jpeg" alt="" />
    </div>
    <div className="post__footer">
      <div className="post__footerAction">
        <ArrowUpwardOutlinedIcon />
        <ArrowDownwardOutlinedIcon />
      </div>
      <RepeatOutlinedIcon />
      <ChatBubbleOutlineOutlinedIcon />
      <div className="post__footerLeft">
        <ShareOutlinedIcon />
        <MoreHorizOutlinedIcon />
      </div>
    </div>
  </div>
  )
}

export default Post;
