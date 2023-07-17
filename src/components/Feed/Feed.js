import React from 'react';
import './Feed.css';
import QuoraBox from '../QuoraBox/QuoraBox'
import Post from '../Post/Post';

function Feed() {
  return (
    <div className="feed">
    <QuoraBox />
    <Post />
    </div>
  )
}

export default Feed
