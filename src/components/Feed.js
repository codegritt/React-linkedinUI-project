import React, { useEffect, useState } from "react";
import "./Feed.css";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import InputOption from "./InputOption";
import ImageSharpIcon from "@mui/icons-material/ImageSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     db.collection("posts").onSnapshot((snapshot)=>
  //         setPosts(
  //             snapshot.doc.map((doc)=>{

  //                 data:doc.data()
  //             }))
  //         )
  //     );
  //   }, []);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <EditSharpIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="button" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageSharpIcon} title="Photo" color="#7085f9" />
          <InputOption
            Icon={SubscriptionsSharpIcon}
            title="Video"
            color="green"
          />
          <InputOption
            Icon={EventAvailableSharpIcon}
            title="Event"
            color="orange"
          />
          <InputOption
            Icon={CalendarMonthSharpIcon}
            title="Write article"
            color="salmon"
          />
        </div>
      </div>

      {/* {posts.map((post) => (
        <Post />
      ))} */}

      <Post
        name="Gokul Chandan"
        description="This is a test"
        message="Gokul is creating a react website"
      />
    </div>
  );
}

export default Feed;
