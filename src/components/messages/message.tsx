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

function Message() {
  const [active, setActive] = useState(false);
  function activeBtn() {
    setActive((active) => !active);
  }
  let addClass = active ? "active" : "";
  return (
    <table className="message-display">
      <tbody>
        <tr>
          <td
            style={{ textAlign: "center", padding: "1rem", fontWeight: "bold" }}
            className="dropdown-item-link"
          >
            Messages
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
              <img
                style={{
                  height: "2rem",
                  borderRadius: "5rem",
                  marginRight: "1rem",
                }}
                src="asset\images\face1.jpg"
              />
              <span>
                <p>Mark send you a message</p>
                <span style={{ color: "#ccc" }}>1 Minutes ago</span>
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
              <img
                style={{
                  height: "2rem",
                  borderRadius: "5rem",
                  marginRight: "1rem",
                }}
                src="asset\images\face2.jpg"
              />
              <span>
                <p>Cregh send you a message</p>
                <span style={{ color: "#ccc" }}>15 Minutes ago</span>
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
              <img
                style={{
                  height: "2rem",
                  borderRadius: "5rem",
                  marginRight: "1rem",
                }}
                src="asset\images\face3.jpg"
              />
              <span>
                <p>Profile picture updated</p>
                <span style={{ color: "#ccc" }}>18 Minutes ago</span>
              </span>
            </a>
          </td>
        </tr>
        <hr />
        <tr>
          <td style={{ textAlign: "center", padding: "1rem" }}>
            4 new messages
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Message;
