import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../dummyData"
import CloseFriend from "../closefriends/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">

            <ul className="sidebar-list">

                <li className="sidebar-listitem">
                <RssFeedIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Feed</span>
                </li>


                <li className="sidebar-listitem">
                <ChatIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Chats</span>
                </li>

                <li className="sidebar-listitem">
                <VideocamIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Videos</span>
                </li>

                <li className="sidebar-listitem">
                <GroupsIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Groups</span>
                </li>

                <li className="sidebar-listitem">
                <BookmarkIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Bookmarks</span>
                </li>

                <li className="sidebar-listitem">
                <HelpIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Questions</span>
                </li>


                <li className="sidebar-listitem">
                <WorkIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Jobs</span>
                </li>


                <li className="sidebar-listitem">
                <EventIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Events</span>
                </li>

                <li className="sidebar-listitem">
                <SchoolIcon className="sidebaricon" />
                <span className="sidebar-listitem-text">Courses</span>
                </li>

            </ul>

            <button className="sidebar-button">Show more</button>

            <hr className="sidebar-hr"/>

            <ul className="sidebar-friendlist">

              {Users.map(u=>(
                <CloseFriend key={u.id} user={u} />
              ))}
                

            </ul>

        </div>
    </div>
  )
}
