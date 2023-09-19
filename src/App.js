import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AlbumList from "./components/AlbumList";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <Routes>
      <Route path="/photos/:albumId" element={<PhotoList />} />
      <Route path="/albums/:userId" element={<AlbumList />} />
      <Route path="/" element={<UserList />} />
    </Routes>
  );
}

export default App;
