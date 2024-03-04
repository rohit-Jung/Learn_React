import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedLayout({ children, authenticated = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authenticated && authStatus !== authenticated) {
      navigate("/login");
    } else if (!authenticated && authStatus !== authenticated) {
      navigate("/");
    }
    setLoader(false);
  }, [authenticated, authStatus, navigate]);

  return loader ? <h1>Loading....</h1> : <>{children}</>;
}
