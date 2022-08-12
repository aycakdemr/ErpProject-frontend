import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import MessageDashboard from "./layouts/MessageDashboard";
import ToDoList from "./pages/ToDoList";
import Navi from "./layouts/Navi";
import { ToastContainer } from "react-toastify";
import FinishedToDoList from "./pages/FinishedToDoList";
import Contact from "./pages/Contact";
import Footer from "./layouts/Footer";
import SignIn from "./pages/SignIn";

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
        <Route exact path="contact/*" element={<Contact />} />
        <Route exact path="signin/*" element={<SignIn />} />
      </Routes>
      
    </div>
  );
}

export default App;
