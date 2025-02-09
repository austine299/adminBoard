import TopBar from "./NavBarTop";
import SideBar from "./SideBar";
import Body from "./Body";
import "./appStyle.css";
import "./body.css";

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="main-body">
        <div className="sidebar-main-container">
          <SideBar />
        </div>
        <div className="main-body-content">
          <Body />
        </div>
      </div>
    </div>
  );
}
