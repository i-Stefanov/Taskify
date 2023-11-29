import { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { tasks, testUser } from "./assets/dummyData";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import CreateTask from "./components/CreateTask/CreateTask";
import TaskList from "./components/TaskList/TaskList";
import TaskCard from "./components/TaskCard/TaskCard";
import User from "./components/UserProfile/UserPrifile";
import { AuthProvider } from "./contexts/AuthContext";
import { authServiceFactory } from "./services/authService";

function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <main className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create" element={<CreateTask />} />
            <Route path="/users/:userId" element={<User user={testUser} />} />
            <Route path="/tasklist" element={<TaskList tasks={tasks} />} />
            <Route path="/tasklist/:taskId" element={<TaskCard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
