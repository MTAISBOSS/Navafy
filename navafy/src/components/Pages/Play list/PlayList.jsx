import React, { useState } from "react";
import MusicInfoContainer from "../../Common/MusicInfoContainer";
import MyButton from "../../Common/MyButton";
import Modal from "@mui/material/Modal";
import "./Playlist.css";
import HomePage from "./HomePage";
import MyTextfield from "../../Common/MyTextfield";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
const PL = {};
const show_musics = (props) => {
  const data = props.item;
  return (
    <div className="musics">
      {PL[data].map((song) => (
        <div className="music">
          <MusicInfoContainer
            width="60%"
            height="60px"
            name={song}
            description={music[song]}
            Space="1"
            Size="60px"
            Font_name="25px"
            Font_description="14px"
          />
        </div>
      ))}
    </div>
  );
};

const PlayList = () => {
  const [playlist_musics, setplaylist_musics] = useState("");
  const [isvisible, setisvisible] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [playlist_items, setplaylist_items] = useState(PL);
  const [added_music, setadded_music] = useState([]);
  const [new_pl_name, setnew_pl_name] = useState("");
  const [clicked_pl, setclicked_pl] = useState("");
  const name = "";
  return (
    <>
      <div style={{ height: "60px" }}>
        <HomePage />
      </div>
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
                color: "#cde6fe",
                height: 50,
                width: 140,
                fontSize: 14,
                borderRadius: 10,
              }}
            />
          </div>
          <div id="added_playlists">
            {Object.keys(playlist_items).map((item) => (
              <div className="playlist_card ">
                <MusicInfoContainer
                  name={item}
                  Space="4.5"
                  Size="75px"
                  Font_name="25px"
                  Font_description="17px"
                />
                <button
                  onClick={() => {
                    setplaylist_musics(show_musics({ item }));
                    setisvisible(true);
                    setclicked_pl(item);
                  }}
                >
                  مشاهده جزئیات
                </button>
              </div>
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
              onClick={() => {
                setplaylist_items((current) => {
                  const copy = { ...current };
                  console.log(copy);
                  delete copy[clicked_pl];
                  delete PL[clicked_pl];
                  console.log(copy);
                  return copy;
                });
                setclicked_pl("");
                setisvisible(false);
              }}
              style={{
                backgroundColor: "#00cf2d",

                fontFamily: "Vazirmatn",
                marginLeft: 20,
                height: 50,
                width: 140,
                fontSize: 14,
                borderRadius: 10,
                fontSize: 13,
                color: "#cde6fe",
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
                color: "#cde6fe",
              }}
            />
          </div>
          {/*place to show the musics*/}
          {playlist_musics}
        </div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="create_playlist">
            <MyButton
              btntext="X"
              onClick={() => {
                handleClose();
                setadded_music([]);
              }}
              variant="text"
              style={{
                color: "#cde6fe",
                height: "50px",
                width: "10px",
                fontSize: 20,
                borderRadius: 10,
              }}
            />
            <TextField
              id="playlist_name"
              label="نام پلی لیست"
              type="text"
              onChange={(event) => {
                setnew_pl_name(event.currentTarget.value);
              }}
              name="playlist_name"
              style={{
                width: 300,
                backgroundColor: "#2a2033",
                borderRadius: '10px',
                marginLeft: "31%",
                marginTop: 70,
                marginBottom:40,
                direction:'rtl'
              }}
              sx={{
                "& .MuiFormLabel-root": {
                },
                "& > :not(style)": { fontFamily: "Vazirmatn", color: "gray" },
              }}
              variant="outlined"
              required
              InputProps={{
                sx: {
                  "& input": {
                    textAlign: "right",
                  },
                },
              }}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Object.keys(music)}
              style={{
                width: "90%",
                marginLeft: "4%",
                marginTop: "2%",
                backgroundColor: "#2a2033",
                borderRadius: "10px",
              }}
              renderOption={(option, { selected }) => (
                <div className="music_component">
                  <MusicInfoContainer
                    name={option.key}
                    description={music[option.key]}
                    Font_name="18px"
                    Font_description="13px"
                    Space={1.2}
                    padding="20px"
                    onClick={() => {
                      setadded_music((current) => [
                        ...new Set([...current, option.key]),
                      ]);
                    }}
                    Size="50px"
                  />
                  <MyButton
                    variant="contained"
                    onClick={() => {
                      setadded_music((current) => [
                        ...new Set([...current, option.key]),
                      ]);
                    }}
                    style={{
                      backgroundColor: "#00cf2d",
                      width: 20,
                      height: 40,
                      margin: "20px",
                      borderRadius: "10px",
                      color: "#cde6fe",
                      fontFamily: "Vazirmatn",
                    }}
                    btntext="افزودن"
                  />
                </div>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="filled-basic"
                  label="آهنگ مورد نظر"
                  variant="filled"
                  sx={{
                    "& > :not(style)": {
                      fontFamily: "Vazirmatn",
                      color: "grey",
                      direction:'rtl'
                    },
                  }}
                  
                />
              )}
            />
            <div className="added_musics">
              {added_music.map((musics) => (
                <div className="music_component_added">
                  <MusicInfoContainer
                    name={musics}
                    description={music[musics]}
                    Space={1}
                    Font_name="20px"
                    Font_description="10px"
                    padding="20px"
                    Size="50px"
                  />
                  <MyButton
                    variant="contained"
                    onClick={() => {
                      setadded_music((current) =>
                        current.filter((choosed) => musics !== choosed)
                      );
                    }}
                    style={{
                      backgroundColor: "#00cf2d",
                      width: 20,
                      height: 40,
                      margin: "20px",
                      borderRadius: "10px",
                      color: "#cde6fe",
                      fontFamily: "Vazirmatn",
                    }}
                    btntext="حذف"
                  />
                </div>
              ))}
            </div>
            <MyButton
              btntext="ساخت لیست پخش"
              variant="contained"
              onClick={() => {
                PL[new_pl_name] = added_music;
                setplaylist_items(PL);
                console.log(playlist_items);
                setadded_music([]);
                setnew_pl_name("");
                handleClose();
                setisvisible(false);
              }}
              style={{
                backgroundColor: "#00cf2d",
                fontFamily: "Vazirmatn",
                marginLeft: "20px",
                height: 50,
                width: 140,
                fontSize: 14,
                borderRadius: 10,
                fontSize: 13,
                color: "#cde6fe",
              }}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};
export default PlayList;
const music = {
  "ماه پیشونی": "محسن چاوشی",
  ال: "سینا پارسیان",
  دریا: "رضا ملک زاده",
  هیس: "آصف آریا",
  "قراضه چین": "محسن چاوشی",
  نفس: "فرزاد فرزین",
  "نداره این دنیا وفا": "ناصر یعقوبی",
  "آدم سابق": "رضا بهرام",
  "بگو انتخابم": "آنیل",
  کولی: "همایون شجریان",
  "رنگین کمون": "کسری زاهدی",
  قرار: "مهدی احمدوند",
  قاصدک: "پازل بند",
};
