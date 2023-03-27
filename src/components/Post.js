import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import PostAddSharpIcon from "@mui/icons-material/PostAddSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";

function Post({ name, description, message, photUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Gokul VA</h2>
          <p>
            Angular | React | Node.js | MongoDB | ExpressJS | Full stack
            developer
          </p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltSharpIcon} title="Like" color="gray" />
        <InputOption Icon={MessageSharpIcon} title="Comment" color="gray" />
        <InputOption Icon={PostAddSharpIcon} title="Repost" color="gray" />
        <InputOption Icon={SendSharpIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
