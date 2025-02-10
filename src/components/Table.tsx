import React from "react";
import Profile from "./Profile";
import Details from "../Details";

function Table(props:any) {
  return (
    <tr className="ticket-row">
      <td>
        <img
          src={props.profile}
          style={{
            height: "2.5rem",
            borderRadius: "5rem",
            marginRight: "1rem",
          }}
        />
        {props.name}
      </td>
      <td>{props.subject}</td>
      <td>
        <span
          style={{
            background: "linear-gradient(to right, #84d9d2, #07cdae)",
            color: "#ffffff",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          {props.status}
        </span>
      </td>
      <td>{props.lastUpdate}</td>
      <td>{props.trackingID}</td>
    </tr>
  );
}

export default Table;
