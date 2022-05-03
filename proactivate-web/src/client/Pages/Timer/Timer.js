import React, { useState, useEffect } from "react";
import { auth } from "../../../server/config/firebase-config";
import "./Timer.css";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyBGOJOMAARdo4ZPfFBpkHzfRezVurJJOXM",
  authDomain: "cs222project-343120.firebaseapp.com",
  projectId: "cs222project-343120",
  storageBucket: "cs222project-343120.appspot.com",
  messagingSenderId: "393335656297",
  appId: "1:393335656297:web:110e4b5fd6fa394e3db7f8",
  measurementId: "G-VR6EDJ7E41"
};

const Timer = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const app = initializeApp(firebaseConfig);
  const [user,setUser] = useState([]);
  const [UID,setUID] = useState("");

  useEffect(()=>
        {
          onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      },[]);

    useEffect(()=> {
      const user_json = JSON.stringify(user);
      const parsed_json = JSON.parse(user_json);
      const getUID = parsed_json.uid
      if (getUID != null)
      setUID(parsed_json.uid)
    }, [user]);
  

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    let body = {
      uid: UID,
      seconds: parseInt(second),
      minutes: parseInt(minute)
    }
    const res = axios.post("http://localhost:5000/time/add_session", body);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }

  return (
    <div className="container">
      <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)} className="start">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={stopTimer} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};
export default Timer;
