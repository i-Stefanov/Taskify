import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
  // todo
  const { onLogout } = useContext(AuthContext);
  // console.log(onLogout());
  onLogout();
  return <Navigate to="/" />;
}
