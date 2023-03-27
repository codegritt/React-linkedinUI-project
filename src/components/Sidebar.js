import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import "./Sidebar.css";

function Sidebar({ avatar }) {
  const recentItem = (topic) => {
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic} </p>
    </div>;
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/id/1005837996/vector/brick-wall-background.jpg?s=612x612&w=0&k=20&c=M9sCv9W6mHj7HfHR6bTsRS9535f2CWZUG2FQtqBVZcY="
          alt=""
        />
        <Avatar className="sidebar__avatar" />

        <h2>Gokul Chandan</h2>
        <h4>gokulchandan24@gmail.com</h4>
        <h5>
          Angular | React | Node.js | MongoDB | ExpressJS | Full stack developer
        </h5>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">4587</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2145</p>
        </div>
      </div>

      <div className="sidebar__Secondstat">
        <p>Access exclusive tools and insights</p>
        <p style={{ color: red }}>Try premium for free</p>
      </div>
      <div className="sidebar__Secondstat">
        <p>#My items</p>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        <p>#react.js</p>
        <p>#programming</p>
        <p>#software engineering</p>
        <p>#developer</p>
        <p>#coding</p>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("developer")}
        {recentItem("coding")}
      </div>
    </div>
  );
}

export default Sidebar;
