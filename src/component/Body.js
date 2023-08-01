import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { openToggle } from "../store/ToggleSlice"; 

const Body = () => {
  const dispatch = useDispatch();
  const navigation = useLocation();

  useEffect(() => {
    if (navigation.pathname === "/") {
      toggleHandle(); 
    }
  }, [navigation]);

  const toggleHandle = () => {
    dispatch(openToggle());
  };

  return (
    <div>
      <Header />
      <div className="video-body">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
