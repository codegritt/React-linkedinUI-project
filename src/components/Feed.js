import React, { useEffect, useState } from "react";
import "./Feed.css";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import InputOption from "./InputOption";
import ImageSharpIcon from "@mui/icons-material/ImageSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "./firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Gokul VA",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <EditSharpIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

      {/* <Post
        name="Gokul Chandan"
        description="This is a test"
        message="Gokul is creating a react website"
      /> */}
    </div>
  );
}

export default Feed;
