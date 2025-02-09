import Table from "../Table";
import Details from "../Details";

let profile1 = Details.filter((Detail) => Detail.id === 1).map(
  (Detail) => Detail.profile
);

function Dashboard() {
  return (
    <div className="dashboard-container">
      <b>Recent Updates</b>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <span style={{ color: "#ccc" }}>
          <span style={{ marginRight: "10px" }} className="fa fa-user"></span>
          <span>jack Menqu</span>
        </span>
        <span style={{ color: "#ccc" }}>
          <span
            style={{ marginRight: "10px" }}
            className="fa fa-clock-o"
          ></span>
          <span>October 3rd, 2018</span>
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        <div style={{ border: "3px solid #fff" }}>
          <img
            style={{ width: "100%", borderRadius: "5px" }}
            src="asset\images\dashboard_image\img_1.jpg"
          />
        </div>
        <div style={{ border: "3px solid #fff" }}>
          <img
            style={{ width: "100%", borderRadius: "5px" }}
            src="asset\images\dashboard_image\img_2.jpg"
          />
        </div>
        <div style={{ border: "3px solid #fff" }}>
          <img
            style={{ width: "100%", borderRadius: "5px" }}
            src="asset\images\dashboard_image\img_3.jpg"
          />
        </div>
        <div style={{ border: "3px solid #fff" }}>
          <img
            style={{ width: "100%", borderRadius: "5px" }}
            src="asset\images\dashboard_image\img_4.jpg"
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {" "}
        <img
          style={{
            height: "2rem",
            borderRadius: "5rem",
            marginRight: "1rem",
          }}
          src={profile1}
        />
        <div>
          <b>School Website - Authentication Module.</b>
          <p style={{ marginTop: "1rem" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
