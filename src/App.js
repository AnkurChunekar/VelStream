import "./App.css";
import { Footer, Navbar } from "./components";
import { Login, Signup } from "./pages";


function App() {
  return (
    <div className="App dark">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
