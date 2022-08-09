import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Inbox from "./pages/Inbox";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router";
import MessageDashboard from "./layouts/MessageDashboard";
import MessageDetail from "./pages/MessageDetail";
function App() {
  return (
    <div className="App">
      <br></br>
      <Routes>
        <Route  path="*" element={<Dashboard />} />
        <Route exact path="messages/*" element={<MessageDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
