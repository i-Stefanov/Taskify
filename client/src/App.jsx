import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import CreateTask from "./components/CreateTask/CreateTask";
import TaskList from "./components/TaskList/TaskList";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import User from "./components/UserProfile/UserPrifile";
import EditTask from "./components/EditTask/EditTask";
import { AuthProvider } from "./contexts/AuthContext";
import { TaskProvider } from "./contexts/TaskContext";
import { RouteGuard } from "./components/common/RouteGuard";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <TaskProvider>
          <div>
            <Navbar />
            <main className="content">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<RouteGuard />}>
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/create" element={<CreateTask />} />
                  <Route path="/tasklist/:taskId/edit" element={<EditTask />} />
                  <Route path="/users/:userId" element={<User />} />
                  <Route path="/tasklist" element={<TaskList />} />
                  <Route path="/tasklist/:taskId" element={<TaskDetails />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </TaskProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
