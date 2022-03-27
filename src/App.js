import "./App.css";
import { Navbar } from "./components";
import { PlaylistPage } from "./pages";


function App() {
  return (
    <div className="App dark">
      <Navbar />
      <PlaylistPage />
    </div>
  );
}

export default App;
