import SigninFrom from "./components/SignupForm";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Dashboard from "./components/dasboard/Dashboard";
import LoginForm from "./components/LoginForm";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/signin" element={<SigninFrom />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user/:uidfromURL" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
