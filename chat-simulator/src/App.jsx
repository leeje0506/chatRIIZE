
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FriendList from "./components/FriendList";
import ChatRoom from "./components/ChatRoom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FriendList />} />
        <Route path="/chat/:character" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
