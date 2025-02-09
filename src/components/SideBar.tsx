import React, { useState } from "react";
import "./sideBar.css";
import Profile from "./Profile";

function SideBar() {
  const [uiElement, setUiElement] = useState(false);
  const [userElement, setUserElement] = useState(false);

  const [arrowDropElement, setArrowDropElement] = useState(true);
  const [arrowDropUser, setArrowDropUser] = useState(true);

  const handleClickUiElement = () => {
    setUiElement(!uiElement);
    setArrowDropElement(!arrowDropElement);
  };

  const handleClickUser = () => {
    setUserElement(!userElement);
    setArrowDropUser(!arrowDropUser);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="Profile-name">
          <Profile />
          <span
            style={{
              fontSize: "0.7rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="full-name">David Grey.H</span>
            <span className="work">Project Manager</span>
          </span>
          <span className="fa fa-bookmark" style={{ color: "green" }}></span>
        </div>
        <div className="side-items">
          <a href="#">Dashboard</a>
          <span className="icon-style fa fa-home"></span>
        </div>

        <div className="side-items" onClick={handleClickUiElement}>
          <a href="#">Basic UI Element </a>
          <span style={{ display: "flex", gap: "5px" }}>
            {arrowDropElement ? (
              <span
                style={{ color: "#ccc", fontSize: "14px" }}
                className="fa fa-chevron-left arrow-drop"
              >
                {" "}
              </span>
            ) : (
              <span
                style={{ color: "#ccc", fontSize: "14px" }}
                className="fa fa-chevron-down arrow-drop"
              >
                {" "}
              </span>
            )}
            <span className="icon-style fa fa-dot-circle-o"></span>
          </span>
        </div>
        {uiElement ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  className="fa fa-arrow-right"
                  style={{
                    marginRight: "2rem",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                ></span>{" "}
                <span style={{ fontSize: "13px", color: "#ccc" }}>Buttons</span>
              </a>
            </div>
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  className="fa fa-arrow-right"
                  style={{
                    marginRight: "2rem",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                ></span>{" "}
                <span style={{ fontSize: "13px", color: "#ccc" }}>
                  Dropdowns
                </span>
              </a>
            </div>
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  className="fa fa-arrow-right"
                  style={{
                    marginRight: "2rem",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                ></span>{" "}
                <span style={{ fontSize: "13px", color: "#ccc" }}>
                  Typograpics
                </span>
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="side-items">
          <a href="#">Icons</a>
          <span className="icon-style fa fa-id-badge"></span>
        </div>

        <div className="side-items">
          <a href="#">Forms</a>
          <span className="icon-style fa fa-list-ul"></span>
        </div>

        <div className="side-items">
          <a href="#">Charts</a>
          <span className="icon-style fa fa-bar-chart"></span>
        </div>

        <div className="side-items">
          <a href="#">Tables</a>
          <span className="icon-style fa fa-table"></span>
        </div>

        <div className="side-items" onClick={handleClickUser}>
          <a href="#">User Pages</a>
          <span style={{ display: "flex", gap: "10px" }}>
            {arrowDropUser ? (
              <span
                style={{ color: "#ccc", fontSize: "14px" }}
                className="fa fa-chevron-left arrow-drop"
              >
                {" "}
              </span>
            ) : (
              <span
                style={{ color: "#ccc", fontSize: "14px" }}
                className="fa fa-chevron-down arrow-drop"
              >
                {" "}
              </span>
            )}
            <span className="icon-style fa fa-lock"></span>
          </span>
        </div>
        {userElement ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  className="fa fa-arrow-right"
                  style={{
                    marginRight: "2rem",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                ></span>{" "}
                <span style={{ fontSize: "13px", color: "#ccc" }}>
                  Black Page
                </span>
              </a>
            </div>
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  className="fa fa-arrow-right"
                  style={{
                    marginRight: "2rem",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                ></span>{" "}
                <span style={{ fontSize: "13px", color: "#ccc" }}>Logins</span>
              </a>
            </div>
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  className="fa fa-arrow-right"
                  style={{
                    marginRight: "2rem",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                ></span>{" "}
                <span style={{ fontSize: "13px", color: "#ccc" }}>
                  Register
                </span>
              </a>
            </div>
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  className="fa fa-arrow-right"
                  style={{
                    marginRight: "2rem",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                ></span>{" "}
                <span style={{ fontSize: "13px", color: "#ccc" }}>404</span>
              </a>
            </div>
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <span
                  className="fa fa-arrow-right"
                  style={{
                    marginRight: "2rem",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                ></span>{" "}
                <span style={{ fontSize: "13px", color: "#ccc" }}>500</span>
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="side-items">
          <a href="#">Documentations</a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
