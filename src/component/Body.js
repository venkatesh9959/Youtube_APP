import React, { useEffect , useState} from "react";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { closeToggle, openToggle } from "../store/ToggleSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigation = useLocation();
  const[screenwidth,setScreenWidth]=useState(window.innerWidth)

  const toggleHandle = () => {
    dispatch(openToggle());
  };
  useEffect(() => {
    if (navigation.pathname === "/") {
      toggleHandle();
    }
  }, [navigation]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      if (screenwidth < 760) {
        dispatch(closeToggle());
      }
      else{
        toggleHandle()
      }
    };

    // Add event listener for the 'resize' event
    window.addEventListener("resize", handleResize);

    // Call handleResize once on initial load to set the correct toggle state
    handleResize();
    

    // Cleanup: Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  

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
