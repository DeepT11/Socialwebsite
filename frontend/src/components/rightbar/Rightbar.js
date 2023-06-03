import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar=()=>{
    return (
      <>
      <div className="bday-container">
        <img className="bday-img" src="assets/gift.jpg" alt="bday"/>
        <span className="bday-text">
          <b>Voldemort</b> and <b>3 other friends</b> have a bday today
          </span>
        </div>

        <img className="rightbar-ad" src="assets/ad.jpg" alt="rightbar-ad"/>

        <h4 className="rightbar-title">Online Friends</h4>

        <ul className="rightbar-friendlist">

        {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        
        </ul>
        
     
      </>
    )
  };


  const ProfileRightbar=()=>{
    return (
    <>
    <h4 className="rightbar-proftitle">User Info</h4>
    <div className="rightbar-info">
      <div className="rightbar-infoitem">
        <span className="rightbar-infokey">City:</span>
        <span className="rightbar-infoval">{user.city}</span>
      </div>

      <div className="rightbar-infoitem">
        <span className="rightbar-infokey">From:</span>
        <span className="rightbar-infoval">{user.from}</span>
      </div>

      {/* <div className="rightbar-infoitem">
        <span className="rightbar-infokey">Parents:</span>
        <span className="rightbar-infoval">James Potter and Lily Potter</span>
      </div> */}

      <div className="rightbar-infoitem">
        <span className="rightbar-infokey">Relationship:</span>
        <span className="rightbar-infoval">
        {user.relationship===1?"Single"
        :user.relationship===1? "Married":"-"}</span>
      </div>

    </div>

    <h4 className="rightbar-proftitle">User Friends</h4>
    <div className="rightbar-following">
      <div className="rightbar-followingitem">
        <img 
        src={`${PF}person/ron.jpg`}
        className="rightbar-followingimg" 
        alt="frnd"/>
        <span className="rightbar-followingname">Followers</span>
      </div>
    </div>

    </>    
    )
  };
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
          {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
