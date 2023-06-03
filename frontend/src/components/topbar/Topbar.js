import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logomain">LamaSocial</span>
        </Link>
      </div>


      <div className="topbar-center">
      <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>


      <div className="topbar-right">

         <div className="topbar-links">
          <span className="topbar-link">
            Homepage
          </span>
          <span className="topbar-link">
            Timeline
          </span>
         </div>

         <div className="topbar-icons">
          <div className="topbar-iconitems">
             <AccountBoxIcon/>
             <span className="topbar-iconbadge">1</span>
          </div>
          <div className="topbar-iconitems">
             <ChatIcon/>
             <span className="topbar-iconbadge">2</span>
          </div>
          <div className="topbar-iconitems">
             <NotificationsIcon/>
             <span className="topbar-iconbadge">1</span>
          </div>
         </div>
   
         <Link to={`/profile/${user.username}`}>
         <img 
        src={
          user.profilePicture
            ? PF + user.profilePicture
            : PF + "person/cover.jpg"
        }
         alt="profile" 
         className="topbarimg" 
         />
         </Link>

      </div>


      
      
    </div>
  )
}
