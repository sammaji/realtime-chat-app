import { useState } from "react";
import SigninFrom from "./components/SignupForm";
import { Routes, Route, Link } from "react-router-dom";
import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/signin" element={<SigninFrom />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/:id" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
