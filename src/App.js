import "./App.css";
import { Navbar } from "./components";
import { History, Liked, PlaylistPage, VideoListing, WatchLater } from "./pages";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
