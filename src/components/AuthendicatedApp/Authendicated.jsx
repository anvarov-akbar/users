import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from "../Header/Header";
import Nav from "../Nav/Nav";

import Home from "../../Pages/Home/Home";
import Video from "../../Pages/Video/Video";
import Channel from "../../Pages/Channel/Channel";
import Error from "../../Pages/Error/Error";

import "../../App.css";
// import Home from "../../Pages/Home";
// import Posts from "../../Pages/Posts";
// import Comments from "../../Pages/Comments";

function AuthenticatedApp() {
  return (
    <div className="App">
    <Header />

    <main className="main">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:channelId" element={<Channel />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </main>
  </div>
  );
}

export default AuthenticatedApp; 