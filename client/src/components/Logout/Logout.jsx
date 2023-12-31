import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
  // todo
  const { onLogout } = useContext(AuthContext);
  useEffect(() => {
    onLogout();
  }, []);
  return <Navigate to="/" />;
}
