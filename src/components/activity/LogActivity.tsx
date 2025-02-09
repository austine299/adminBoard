function LogActivity() {
  return (
    <div className="dropdown-display">
      <a className="dropdown-item" href="#">
        <img
          style={{ width: "1rem", marginRight: "0.5rem" }}
          src="asset\images\refresh.svg"
        />
        Activity Log
      </a>
      <hr />
      <a className="dropdown-item" href="#">
        <img
          style={{ width: "1rem", marginRight: "0.5rem" }}
          src="asset\images\logout.svg"
        />
        SignOut
      </a>
    </div>
  );
}

export default LogActivity;
