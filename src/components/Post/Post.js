import React, { useEffect, useState } from 'react';
import './Post.css';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Avatar } from '@mui/material';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionId, setQuestionInfo } from '../../features/questionSlice';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';

function Post({ Id, question, imageUrl, timestamp, users }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);

  useEffect(() => {
    if (questionId) {
      const answerCollectRef=collection(db,"questions",questionId,"answer");
      const q=query(answerCollectRef, orderBy("timestamp","desc"));

      onSnapshot(q,(snapshot)=>{
        setGetAnswers(
          snapshot.docs.map((doc)=>({
            id: doc.id,
            answers: doc.data()
          }))
        )
      }) 
    }
  }, [questionId]);

  const handleAnswer = async (e) => {
    e.preventDefault();

    if (questionId) {
      try {
        const answerCollectRef=collection(db,"questions",questionId,"answer");
        await addDoc(answerCollectRef,{
          user: user,
          answer: answer,
          questionId: questionId,
          timestamp: serverTimestamp(),
        });
        console.log("Answer added successfully!");
        
      } catch (error) {
        console.error(error);
      }
    }
    console.log(questionId);
    setAnswer("");
    setIsModalOpen(false);
  };

  return (
    <div
    className="post"
    onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: question,
          })
        )
      }
    >
    <div className="post__info">
      <Avatar 
         src={
            users.photo
              ? users.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
      />
      <h4>{users.displayName ? users.displayName : users.email}</h4>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
    <div className="post__body">
      <div className="post__question">
        <p>{question}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="post__btnAnswer">
          Answer
        </button>
        <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users.displayName ? users.displayName : users.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div className="post__answer">
          {getAnswers.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
        <img src={imageUrl} alt="" />
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
