import React, { useEffect, useState } from 'react';
import './Feed.css';
import QuoraBox from '../QuoraBox/QuoraBox'
import Post from '../Post/Post';
import db from '../../firebase';
import { collection, onSnapshot, orderBy, query} from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  const questionCollectionRef = collection(db, "questions");
  const q = query(questionCollectionRef, orderBy("timestamp", "desc"));

  onSnapshot(q, (snapshot) =>
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        questions: doc.data(),
      }))
    )
  );
  }, []);
  return (
    <div className="feed">
    <QuoraBox />
    {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        />
      ))}
    </div>
  )
}

export default Feed
