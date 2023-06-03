import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import ChairIcon from '@mui/icons-material/Chair';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios";

export default function Share() {
    const { user } = useContext(AuthContext);
      const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      const desc = useRef();
      const [file, setFile] = useState(null);
    
      const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          newPost.img = fileName;
          console.log(newPost);
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          await axios.post("/posts", newPost);
          window.location.reload();
        } catch (err) {}
      };

  return (
    <div className="share">
        <div className="share-wrapper">

            <div className="share-top">
              <img 
              className="shareprofileimg" 
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/cover.jpg"
              }
              alt="profile" 
              />
              <input 
              placeholder={"What's in your mind " + user.username + "?"}
              className="shareInput"
              ref={desc}
              />
            </div>

            <hr className="sharehr"/>
            {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}

            <form className="share-bottom" onSubmit={submitHandler}>
               
                    <div className="share-options">

                        <div className="share-option">
                            <PermMediaIcon  htmlColor="tomato" className="shareicon"/>
                            <span className="share-optiontext">Photo or Video</span>
                        </div>

                        <div className="share-option">
                            <LabelIcon htmlColor="blue" className="shareicon"/>
                            <span className="share-optiontext">Tag</span>
                        </div>

                        <div className="share-option">
                            <ChairIcon htmlColor="green" className="shareicon"/>
                            <span className="share-optiontext">Loaction</span>
                        </div>

                        <div className="share-option">
                            <EmojiEmotionsIcon htmlColor="orange" className="shareicon"/>
                            <span className="share-optiontext">Mood</span>
                        </div>

                    </div>


                    <button className="share-button" id="share-btn">Share</button>
                </form>
            

        </div>
    </div>
  )
}
