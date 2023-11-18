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
import { AuthContext } from "./contexts/AuthContext";
import { authServiceFactory } from "./services/authService";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);
  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...userData } = data;
    try {
      if (confirmPassword !== userData.password) {
        throw new Error("Passwords don't match!");
      }
      const result = await authService.register(userData);
      setAuth(result);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      console.log(result);
      setAuth(result);
      navigate("/");
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  // const onLogout = async () => {
  //   // todo authorized request
  //   // await authService.logout();
  //   setAuth({});
  // };
  const context = {
    onRegisterSubmit,
    onLoginSubmit,
    // onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    // double negation !! translates the truthy values to true and tha falsy values to false similar to Boolean(value)
    isAuthenticated: !!auth.accessToken,
  };
  return (
    <AuthContext.Provider value={context}>
      <div>
        <Navbar />
        <main className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="/create" element={<CreateTask />} />
            <Route path="/users/:userId" element={<User user={testUser} />} />
            <Route path="/tasklist" element={<TaskList tasks={tasks} />} />
            <Route path="/tasklist/:taskId" element={<TaskCard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
