import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
