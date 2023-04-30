import { useState } from 'react'
import Challenge from "./challenges/Challenge5";
import Header from "./challenges/Header";
import Main from './challenges/Main'
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import Messages from './challenges/Messages';
import Forms from './challenges/Forms';


function App() {

  return (
    <>
      <Navbar />
      <Forms />
      {/* <Messages /> */}
      {/* <Meme /> */}
      {/* <Challenge darkMode={true} /> */}
    </>
  );
}

export default App;
