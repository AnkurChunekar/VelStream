import "./App.css";
import { Footer, Navbar } from "./components";
import { VideoListing } from "./pages";


function App() {
  return (
    <div className="App dark">
      <Navbar />
      <VideoListing />
    </div>
  );
}

export default App;
