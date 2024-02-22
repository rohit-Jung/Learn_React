import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //Using the useLoaderData hook to load the data from the loader we used back in main.jsx
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600">
      <div className="flex items-center justify-center flex-col gap-10">
        <h2 className=" text-white p-4 text-3xl mt-8">
          {" "}
          Github: {data.followers}
        </h2>
        <img
          src={data.avatar_url}
          alt="Git picture"
          width={300}
          className="mb-8"
        />
      </div>
    </div>
  );
}
//Returning the whole function that fetches the data to use it in the main.jsx loader part
export const gitInfo = async () => {
  const response = await fetch("https://api.github.com/users/rohit-Jung");
  return response.json();
};
