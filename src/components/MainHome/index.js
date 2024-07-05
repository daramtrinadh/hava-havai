import Navbar from "../Navbar";
import SideBar from "../SideBar";
import { Link } from "react-router-dom";
import './index.css'

const MainHome = () => (
  <>
    <Navbar />
    <div className='main-home-sec'>
      <div className='sidebar-section'>
        <SideBar />
      </div>
      <p>
        Navigate to <Link to="/airports">Airports</Link>
      </p>
    </div>
  </>
);
export default MainHome;
