import React, { useState } from "react";
import MusicInfoContainer from "../../Common/MusicInfoContainer";
import MyButton from "../../Common/MyButton";
import Modal from "@mui/material/Modal";
import "./Playlist.css";
import MyTextfield from "../../Common/MyTextfield";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Homepage from "../../Common/HomePage";

const this_Songs = {
  this: ["this1", "this2", "this3", "this4"],
  thy: ["thy1", "thy2", "thy3", "thy4"],
  1: ["wh1", "wh2", "wh3", "wh4"],
};
const printing = (props) => {
  const data = props.item;
  console.log(data);
  return (
    <div className="musics">
      {this_Songs[data].map((song) => (
        <div className="music">
          <MusicInfoContainer
            width="60%"
            height="60px"
            name={song}
            Space="1"
            Size="60px"
            Font_name="25px"
            Font_description="17px"
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
  const [playlist_items,setplaylist_items] = useState(["this", "thy", "wh", 1, 2, 3, 4, 5, 6, 7]);
  const [btnclicked, setbtnclicked] = useState({});
  return (
    <>
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
          {playlist_items.map((item) => (
            <div className="playlist_card ">
              <MusicInfoContainer
                name={item}
                Space="4"
                Size="75px"
                Font_name="25px"
                Font_description="17px"
              />
              <button
                onClick={() => {
                  setplaylist_musics(printing({ item }));
                  setisvisible(true);
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
        {/*place to show the musics*/}
        {playlist_musics}
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
            text="نام پلی لیست"
            type="text"
            name="playlist_name"
            style={{
              width: 300,
              backgroundColor: "#3c2e49",
              margin: 10,
              borderRadius: 10,
              marginLeft: "58%",
              marginTop: 30,
            }}
            variant="outlined"
            required
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={musics}
            sx={{ width: 300 }}
            renderOption={(option, { selected }) => (
              <div className="music_component">
                <MusicInfoContainer
                  name={option.key}
                  Space={1}
                  padding="20px"
                  onClick={() => {
                    console.log(option.key);
                  }}
                  Size="50px"
                />
                  <MyButton
                    variant="contained"
                    style={{
                      backgroundColor: "#5b268b",
                      transition: "400ms",
                      width: 20,
                      height: 40,
                      margin: "20px",
                      borderRadius: "20px",
                    }}
                    btntext="افزودن"
                  />
              </div>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                TextField
                id="filled-basic"
                label="آهنگ مورد نظر"
                variant="filled"
                sx={{ width: "300%", marginLeft: 3, marginTop: 4 }}
              />
            )}
          />
        </div>
      </Modal>
    </div>
    </>
  );
};
export default PlayList;
//fghfghf
const musics = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];