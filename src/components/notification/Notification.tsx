import React, { useState } from "react";
import "../navTopStyles.css";
import Table from "../Table";
import Details from "../../Details";

let profile1 = Details.filter((Detail) => Detail.id === 1).map(
  (Detail) => Detail.profile
);
let profile2 = Details.filter((Detail) => Detail.id === 2).map(
  (Detail) => Detail.profile
);
let profile3 = Details.filter((Detail) => Detail.id === 3).map(
  (Detail) => Detail.profile
);
let profile4 = Details.filter((Detail) => Detail.id === 4).map(
  (Detail) => Detail.profile
);

function Notification() {
  const [active, setActive] = useState(false);
  function activeBtn() {
    setActive((active) => !active);
  }
  let addClass = active ? "active" : "";
  return (
    <table className="notification-display">
      <tr>
        <td
          style={{ textAlign: "center", padding: "1rem", fontWeight: "bold" }}
          className="dropdown-item-link"
        >
          Notifications
        </td>
      </tr>
      <hr />
      <tr>
        <td>
          <a
            className={`dropdown-item-link ${addClass} `}
            href="index.html"
            onClick={activeBtn}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "2rem",
                width: "2rem",
                borderRadius: "5rem",
                marginRight: "1rem",
                backgroundColor: "#07cdae",
                color: "#fff",
              }}
            >
              <span className="fa fa-calendar"></span>
            </span>
            <span>
              <p>Event today</p>
              <span style={{ color: "#ccc" }}>
                Just a reminder that you have...{" "}
              </span>
            </span>
          </a>
        </td>
      </tr>
      <hr />
      <tr>
        <td>
          <a
            className={`dropdown-item-link ${addClass} `}
            href="#"
            onClick={activeBtn}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "2rem",
                width: "2rem",
                borderRadius: "5rem",
                marginRight: "1rem",
                backgroundColor: "yellow",
                color: "#fff",
              }}
            >
              <span className="fa fa-cog"></span>
            </span>
            <span>
              <p>Settings</p>
              <span style={{ color: "#ccc" }}>Update dashboard</span>
            </span>
          </a>
        </td>
      </tr>
      <hr />
      <tr>
        <td>
          <a
            className={`dropdown-item-link ${addClass} `}
            href="index.html"
            onClick={activeBtn}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "2rem",
                width: "2rem",
                borderRadius: "5rem",
                marginRight: "1rem",
                backgroundColor: "blue",
                color: "#fff",
              }}
            >
              <span className="fa fa-link"></span>
            </span>
            <span>
              <p>Launch Admin</p>
              <span style={{ color: "#ccc" }}>New admin wow!</span>
            </span>
          </a>
        </td>
      </tr>
      <hr />
      <tr>
        <td style={{ textAlign: "center", padding: "1rem" }}>
          See all notifications
        </td>
      </tr>
    </table>
  );
}

export default Notification;
