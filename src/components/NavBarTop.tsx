import React, { useState, useEffect, useRef } from "react";
import "./navTopStyles.css";
import Profile from "./Profile";
import LogActivity from "./activity/LogActivity";
import Notification from "./notification/Notification";
import Message from "./messages/message";
import CircleDot from "./circleDot/Dot";
import SideBar from "./SideBar";

function TopBar() {
  const [toggleActivity, setToggleActivity] = useState(false);
  const [toggleMessage, setToggleMessage] = useState(false);
  const [toggleNotification, setToggleNotification] = useState(false);
  const [toggleIconnav, setToggleIconnav] = useState(false);

  const handleClickToggleNav = () => {
    setToggleIconnav(!toggleIconnav);
  };

  const handleClickActivity = () => {
    setToggleActivity(!toggleActivity);
  };

  const handleClickMessage = () => {
    setToggleMessage(!toggleMessage);
  };

  const handleClickNotification = () => {
    setToggleNotification(!toggleNotification);
  };
  // let menuRef = useRef();
  // useEffect(() => {
  //   let handler = (e:any) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setToggleActivity(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.addEventListener("mousedown", handler);
  //   };
  // });

  // useEffect(() => {
  //   let handler = (e:any) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setToggleMessage(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.addEventListener("mousedown", handler);
  //   };
  // });

  // useEffect(() => {
  //   let handler = (e:any) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setToggleNotification(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.addEventListener("mousedown", handler);
  //   };
  // });

  // useEffect(() => {
  //   let handler = (e:any) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setToggleIconnav(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.addEventListener("mousedown", handler);
  //   };
  // });

  return (
    <div className="navbody">
      <div className="nav-container">
        <div className="logo-toggler1">
          <img src="asset/images/logo.svg" className="logo-img" />
        </div>

        <div className="logo-toggler2">
          <img src="asset/images/logo-mini.svg" className="logo-img" />
        </div>
        <div className="navbar desktop-toggler">
          <span className="navbar-toggler-icon"></span>
        </div>
        <form action="" className="search-engine">
          <i className="fa fa-search" style={{ margin: "1rem", color: "#ccc" }}>
            {" "}
          </i>
          <input
            type="text"
            style={{ border: "none" }}
            placeholder="search projects"
          />
        </form>

        <div className="navbar-container">
          <div className="pointer logActive" onClick={handleClickActivity}>
            <Profile />
            <CircleDot />

            <span>
              <span className="profile-name">David GreyMaax</span>{" "}
              <i className="fa fa-chevron-down" />
            </span>
          </div>

          {toggleActivity ? <LogActivity /> : <></>}

          <span className="fullscreen ">
            <img
              className="fa fa-fullscreen"
              style={{ height: "1rem" }}
              src="asset\images\fullscreen.svg"
            />
          </span>
          <div className="notify-warning">
            <span
              className="my-icons fa fa-envelope pointer"
              onClick={handleClickMessage}
              
            ></span>
            <div className="count-symbol bg-warning"></div>
          </div>
          {toggleMessage ? <Message /> : <></>}
          <div className="notify-warning">
            <span
              className="my-icons fa fa-bell pointer"
              onClick={handleClickNotification}
              
            ></span>
            <div className="count-symbol bg-danger"></div>
          </div>
          {toggleNotification ? <Notification /> : <></>}

          <span className="notify my-icons fa fa-power pointer">&#xF011;</span>
          <span className="notify pointer">
            <img
              style={{ height: "1.5rem" }}
              src="asset\images\lineHeight.svg"
              className="my-icons fa fa-line-height"
            />
          </span>
          <div
            className="navbar mobile-toggler"
            onClick={handleClickToggleNav}
            
          >
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className="sideToggle">
            {toggleIconnav ? <SideBar /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
