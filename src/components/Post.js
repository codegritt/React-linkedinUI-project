import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ name, description, message, photUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Gokul Chandan</h2>
          <p>
            Angular | React | Node.js | MongoDB | ExpressJS | Full stack
            developer
          </p>
        </div>
      </div>

      <div className="post__body">
        <p>Message goes here</p>
      </div>
    </div>
  );
}

export default Post;
