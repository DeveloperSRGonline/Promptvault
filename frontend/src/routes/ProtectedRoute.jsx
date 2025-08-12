import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuth } from "../services/authServices";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    checkAuth()
      .then(() => {
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
}
