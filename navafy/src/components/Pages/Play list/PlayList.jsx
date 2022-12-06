import React, { useState } from "react";
import MusicInfoContainer from "../../Common/MusicInfoContainer";
import MyButton from "../../Common/MyButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Playlist.css";
import MyTextfield from "../../Common/MyTextfield";

const this_Songs = {
  this: ["this1", "this2", "this3", "this4"],
  thy: ["thy1", "thy2", "thy3", "thy4"],
  1: ["wh1", "wh2", "wh3", "wh4"],
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const printing = (event) => {
  const data = event.currentTarget.innerHTML;
  return (
    <div className="musics">
      {this_Songs[data].map((song) => (
        <MusicInfoContainer width="60%" height="60px" name={song} />
      ))}
    </div>
  );
};
const PlayList = () => {
  const [playlist_musics, setplaylist_musics] = useState("");
  const [isvisible, setisvisible] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const items = ["this", "thy", "wh", 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="PL_body">
      <div className="sidebar">
        <div className="first_row">
          <span>لیست پخش</span>
          <MyButton
            btntext="لیست پخش جدید"
            onClick={handleOpen}
            variant="contained"
            style={{
              backgroundColor: "#00cf2d",
              fontWeight: "bold",
              fontFamily: "Vazirmatn",
              height: 75,
              width: 135,
              fontSize: 14,
              borderRadius: 10,
              fontSize: 13,
            }}
          />
        </div>
        <div id="added_playlists">
          {items.map((item) => (
            <button
              onClick={(event) => {
                setplaylist_musics(printing(event));
                setisvisible(true);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div id="mainbar" style={{ display: isvisible ? "block" : "none" }}>
        <div className="top_bar">
          <MyButton
            btntext="X"
            onClick={() => {
              setisvisible(false);
            }}
            variant="text"
            style={{
              color: "#cde6fe",
              height: 50,
              width: 30,
              fontSize: 20,
            }}
          />
        </div>
        <div className="options">
          <MyButton
            btntext="حذف لیست پخش"
            variant="contained"
            style={{
              backgroundColor: "#00cf2d",
              fontFamily: "Vazirmatn",
              marginLeft: 20,
              height: 50,
              width: 140,
              fontSize: 14,
              borderRadius: 10,
              fontSize: 13,
            }}
          />
          <MyButton
            btntext="ویرایش"
            variant="contained"
            style={{
              backgroundColor: "#00cf2d",
              fontFamily: "Vazirmatn",
              height: 50,
              width: 140,
              fontSize: 14,
              borderRadius: 10,
              fontSize: 13,
            }}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="create_playlist">
          <MyButton
            btntext="X"
            onClick={handleClose}
            variant="text"
            style={{
              color: "#cde6fe",
              height: 35,
              fontSize: 20,
              borderRadius: 10,
            }}
          />
          <MyTextfield
            id="playlist_name"
            text="نام کاربری"
            type="text"
            name="playlist_name"
            style={{
              width: 300,
              backgroundColor: "#6627a5",
              margin: 10,
              borderRadius: 10,
              marginLeft: "58%",
              marginTop: 30,
            }}
            variant="outlined"
            required
          />
        </div>
      </Modal>
    </div>
  );
};
export default PlayList;
