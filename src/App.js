import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Inbox from "./pages/Inbox";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router";
import MessageDashboard from "./layouts/MessageDashboard";
import MessageDetail from "./pages/MessageDetail";
import ToDoList from "./pages/ToDoList";
import Navi from "./layouts/Navi";
import { ToastContainer } from "react-toastify";

import FinishedToDoList from "./pages/FinishedToDoList";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <br></br>
      <Navi></Navi>
        <br></br>
        <br></br>
        <br></br>
      <Routes>
        <Route  path="*" element={<Dashboard />} />
        <Route exact path="messages/*" element={<MessageDashboard />} />
        <Route exact path="todolist/*" element={<ToDoList />} />
        <Route exact path="finishedtodolist/*" element={<FinishedToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
