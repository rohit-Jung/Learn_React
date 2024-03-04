import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.service";
import { logout } from "../../features/authSlice";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("Error while logging out", error);
      });
  };
  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2 duration-300 hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
