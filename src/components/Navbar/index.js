import "./index.css";
import { Avatar } from "@adobe/react-spectrum";

const Navbar = () => (
  <div className='navbar-section'>
    <div>
      <h1 className="brand">hava havai</h1>
    </div>
    <Avatar
      src='https://i.imgur.com/kJOwAdv.png'
      alt='default Adobe avatar'
      size={45}
    />
  </div>
);
export default Navbar;
