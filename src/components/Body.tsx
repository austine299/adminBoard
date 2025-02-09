import Profile from "./Profile";
import Table from "./Table";
import Details from "../Details";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";

function ProfileDetails(myDetails) {
  return (
    <Table
      profile={myDetails.profile}
      name={myDetails.name}
      subject={myDetails.subject}
      status={myDetails.status}
      lastUpdate={myDetails.lastUpdate}
      trackingID={myDetails.trackingID}
    />
  );
}

function Body() {
  return (
    <div className="body">
      <div className="page-header">
        <h3 className="page-title">
          <span className="card dashboard-home-icon">
            {" "}
            <span className="fa fa-home"></span>
          </span>
          <span>Dashboard</span>
        </h3>

        <div className="page-title">
          <span style={{ color: "black" }}>
            Overview{" "}
            <i
              style={{ color: "#9a55ff" }}
              className="fa fa-exclamation-circle"
            />
          </span>
        </div>
      </div>
      <div className="card-body">
        <div className="card card-color1 card-size">
          <h4>
            Weekly Sales
            <i className="fa fa-line-chart float-end" />
          </h4>
          <span>$ 15,000</span>
          <span style={{ marginTop: "1rem" }}>Increased by 60%</span>
        </div>
        <div className="card card-color2 card-size">
          <h4>
            Weekly Orders
            <i className="fa fa-bookmark-o float-end" />
          </h4>
          <span>$ 45,6334</span>
          <span style={{ marginTop: "1rem" }}>Decreased by 10%</span>
        </div>
        <div className="card card-color3 card-size">
          <h4>
            Visitors Online
            <i className="fa fa-diamond float-end" />
          </h4>
          <span>$ 95,5741</span>
          <span style={{ marginTop: "1rem" }}>Increased by 5%</span>
        </div>
      </div>

      <div className="display-chart">
        <div className="card chart-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Visit And Sales Statistics</span>
            <div className="visitor-sales">
              <ul>
                <li>
                  <span
                    style={{ backgroundColor: "rgba(218, 140, 255, 1)" }}
                  ></span>
                  CHN
                </li>
                <li>
                  <span
                    style={{ backgroundColor: "rgba(54, 215, 232, 1)" }}
                  ></span>
                  US
                </li>
                <li>
                  <span
                    style={{ backgroundColor: "rgba(255, 191, 150, 1)" }}
                  ></span>
                  UK
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src="asset\images\sales_stat.png" style={{ width: "95%" }} />
          </div>
        </div>

        <div className="card traffic-source">
          <span>Traffic Sources</span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="\asset\images\sales_traffic.png" alt="" />
          </div>
          <div className="traffic-sources">
            <ul>
              <li>
                <span
                  style={{ backgroundColor: "rgba(218, 140, 255, 1)" }}
                ></span>
                Search engine 30%
              </li>
              <li>
                <span
                  style={{ backgroundColor: "rgba(54, 215, 232, 1)" }}
                ></span>
                Direct click 30%
              </li>
              <li>
                <span
                  style={{ backgroundColor: "rgba(255, 191, 150, 1)" }}
                ></span>
                Bookmark click 40%
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card table-container">
        <h4>Recent Ticket</h4>
        <table className="ticket-table">
          <tbody>
            <tr className="ticket-row">
              <th>Assignee</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Last Update</th>
              <th>Tracking ID</th>
            </tr>
            {Details.map(ProfileDetails)}
          </tbody>
        </table>
      </div>
      <div className="Dashboard-calendar">
        <Calendar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Body;
