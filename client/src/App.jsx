import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CreateTask from "./components/CreateTask/CreateTask";

function App() {
  return (
    <div>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
