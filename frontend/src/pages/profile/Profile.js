import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import { useState,useEffect } from "react"
import axios from "axios"
import {useParams} from "react-router"


export default function Profile() {

const PF=process.env.REACT_APP_PUBLIC_FOLDER;
const [user,setUser]=useState({});
// const params=useParams()
// console.log(params.username)
const username=useParams().username;

useEffect(()=>{
  const fetchUser=async ()=>{
     const res=await axios.get(`/users/?username=${username}`);
     setUser(res.data);
  }
  // axios.get("/timeline/")
  fetchUser();
},[username])

  return (
    <>
    <Topbar/>
    <div className="profile">
       <Sidebar/>
       <div className="profile-right">

            <div className="profile-righttop">
                <div className="profile-cover">
                    <img 
                    className="profilecoverimg" 
                    // src={`${PF}post/hogwarts.jpg`}
                    src={user.coverPicture || PF+"person/cover.jpg"}
                    alt="" 
                    />
                    <img 
                    className="profileuserimg" 
                    // src={`${PF}person/1.jpg`}
                    src={user.profilePicture || PF+"person/profile.jpg"}

                    alt="" 
                    />
                </div>
            </div> 

            <div className="profile-info">
                <h4 className="profile-infoname">{user.username}</h4>
                <span className="profile-infodesc">
                {/* I'm Harry Potter, the Boy Who Lived. I was born on July 31st, 1980, in Godric's Hollow, a small wizarding village in England. My parents, James and Lily Potter, were both powerful wizards. Unfortunately, they were murdered by the most feared dark wizard of all time, Lord Voldemort, when I was just a baby.
                It wasn't until my eleventh birthday that I discovered the magical world existed and that I was accepted into Hogwarts School of Witchcraft and Wizardry. */}
                {user.desc}
                </span>
            </div>

            <div className="profile-rightbottom">
                <Feed username={username}/>
                <Rightbar user={user}/>
            </div>
            
       </div>

    </div>
    </>
  )
}
