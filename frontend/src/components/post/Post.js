
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {Users} from "../../dummyData"
import { useState,useEffect,useContext } from "react";
import axios from "axios";
import {format} from "timeago.js";
import {Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Post({post}) {
    // console.log(post);

    // const user=Users.filter(u=>u.id === 1);
    // console.log(user[0].username);

    const [like,setLike]=useState(post.likes.length);
    const [isLiked,setIsLiked]=useState(false);
    const [user,setUser]=useState({});

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
      }, [currentUser._id, post.likes]);
    
      useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?userId=${post.userId}`);
          setUser(res.data);
        };
        fetchUser();
      }, [post.userId]);
    
      const likeHandler = () => {
        try {
          axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };


  return (
    <div className="post">
        <div className="post-wrapper">

            <div className="post-top">

                <div className="post-topleft">
                    <Link to={`profile/${user.username}`}>
                    <img 
                    className="postprofileimg" 
                    // src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} 
                    src={
                        user.profilePicture
                          ? PF + user.profilePicture
                          : PF + "person/cover.jpg"
                      }
                    alt="profile" 
                    />
                    </Link>
                    <span className="post-username">
                        {/* {Users.filter((u)=>u.id===post.userId)[0].username} */}
                        {user.username}
                    </span>
                    <span className="post-date">{format(post.createdAt)}</span>
                </div>

                <div className="post-topright">
                    <MoreVertIcon />
                </div>

            </div>

            <div className="post-center">
                  {/* ? is included since some of the posts wont have any decription*/}
                <span className="post-centertext">{post?.desc}</span>
                <img className="post-centerimg" src={PF+post.img} alt="profile" />
            </div>

            <div className="post-bottom">

                <div className="post-bottomleft">
                    <img 
                    className="likeicon" 
                    src={`${PF}heart.jpg`}
                    onClick={likeHandler} 
                    alt="heart" 
                    />
                    <img 
                    className="likeicon" 
                    src={`${PF}like.png`}
                    onClick={likeHandler}
                    alt="like" 
                    />
                    <span className="postbottom-leftlikecounter">{like} people liked it</span>
                </div>

                <div className="post-bottomright">
                    <span className="post-bottomrightcomment">{post.comment} comments</span>

                    
                </div>

            </div>

        </div>

    </div>
  )
}
