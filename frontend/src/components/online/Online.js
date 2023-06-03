import "./online.css"
const PF=process.env.REACT_APP_PUBLIC_FOLDER;


export default function Online({user}) {
  return (
    <li className="rightbar-friend">
            <div className="rightbar-imgfriend">
              <img 
                className="rightbar-profileimg"
                src={PF+user.profilePicture}
                alt="profile"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">{user.username}</span>
    </li>
  )
}
