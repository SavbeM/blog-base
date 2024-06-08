import React from "react";

export default function PostListLoading()  {
  return (
      <div className="flex min-h-screen  justify-center mt-40 h-40">
        <div className="animate-pulse bg-gray-500 h-4 w-4 mx-1 opacity-75 transition-all duration-500 delay-150"></div>
        <div className="animate-pulse bg-gray-500 h-4 w-4 mx-1 opacity-50 transition-all duration-500 delay-300"></div>
        <div className="animate-pulse bg-gray-500 h-4 w-4 mx-1 opacity-25 transition-all duration-500 delay-450"></div>
      </div>
  );
}