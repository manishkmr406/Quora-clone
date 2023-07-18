import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import Quora from './components/Quora/Quora';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/auth/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth,(authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return (
    <div className="App">
    {user ? <Quora /> : <Login />}
    </div>
  );
}

export default App;
