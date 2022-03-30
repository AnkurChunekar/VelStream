import "./App.css";
import { Navbar } from "./components";
import {
  User,
  History,
  Liked,
  PlaylistPage,
  VideoListing,
  WatchLater,
  Login,
  Signup,
  SinglePlaylistPage
} from "./pages";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/history" element={<History />} />
        <Route path="/user" element={<User />} />
        <Route path="/playlist/:playlistID" element={<SinglePlaylistPage />} />
        <Route path="/m" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
