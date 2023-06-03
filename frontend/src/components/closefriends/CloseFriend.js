import "./closeFriend.css"
// import {Users} from "../dummyData"
const PF=process.env.REACT_APP_PUBLIC_FOLDER;


export default function CloseFriend({user}) {
  return (
    
    <li className="sidebar-friend">
        <img  className="sidebar-friendimg" 
        src={PF+user.profilePicture} alt="f1"/>
        <span className="sidebar-friendname">{user.username}</span>
    </li>
  )
}
