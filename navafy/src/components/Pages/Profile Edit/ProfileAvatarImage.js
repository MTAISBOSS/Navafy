import React, { useState, useRef } from "react";
import MyTextfield from "../../Common/MyTextfield";
import Dialog from "@mui/material/Dialog";
import img from "../../../Assets/Image/music-wallpaper.jpg";
import Avatar from "react-avatar-edit";
import MyButton from "../../Common/MyButton";

const ProfileAvatarImage = () => {
  const [image, setimage] = useState("");
  const [imagecrop, setimagecrop] = useState("");
  const [src, setsrc] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);
  const inputRef = useRef(null);

  const profileFinal = profile.map((itme) => itme.pview);
  const onClose = () => {
    setpview(null);
  };
  const onCrop = (view) => {
    setpview(view);
  };
  const saveCropImage = () => {
    setprofile([...profile, [pview]]);
    setimagecrop(false);
  };

  const handleClick = () => {
    inputRef.current.click();
  };
  return (
    <div>
      <img
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "7px solid #00cf2d",
        }}
        onClick={() => {
          setimagecrop(true);
        }}
        src={profileFinal.length ? profileFinal : img}
        alt=""
      />

      {/* <Dialog
        visible={imagecrop}
        header={() => {
          <p htmlFor="">ویرایش پروفایل</p>;
        }}
        onHide={() => setimagecrop(false)}
      ></Dialog>
      <Avatar
        className="pointer"
        width={200}
        height={200}
        onCrop={onCrop}
        onClose={onClose}
        src={src}
        shadingColor="white"
        backgroundColor="#ff25d7"
        alt="Profile Avatar"
      />
      <MyTextfield
        type="file"
        ref={inputRef}
        accept="/image/*"
        style={{ display: "none" }}
        onChange={(event) => {
          const file = event.target.files[0];
          if (file && file.type.substring(0, 5) === "image") {
            setimage(file);
          } else {
            setimage(null);
          }
        }}
      ></MyTextfield>
      <MyButton
        btntext="ویرایش"
        type="file"
        onClick={() => {
          saveCropImage();
        }}
      />
      <MyButton
        btntext="ویرایش"
        type="file"
        onClick={() => {
          handleClick();
        }}
      /> */}
    </div>
  );
};

export default ProfileAvatarImage;
