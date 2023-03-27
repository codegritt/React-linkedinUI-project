import React from "react";
import "./Feed.css";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import InputOption from "./InputOption";
import ImageSharpIcon from "@mui/icons-material/ImageSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <EditSharpIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="button">Send</button>
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

      <Post
        name="Gokul Chandan"
        description="This is a test"
        message="Wow it worked"
      />
    </div>
  );
}

export default Feed;
