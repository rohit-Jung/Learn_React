import React from "react";
import { useParams } from "react-router-dom";

//useParams is used to pass the parameters from the url to the web page
const Users = () => {
  
  //Use the same variable that you used back in the router path 
  const { params } = useParams();
  return (
    <div className="m-3 flex items-center justify-center bg-zinc-500 text-4xl  font-bold h-56">
      Parameters: {params}
    </div>
  );
};

export default Users;
