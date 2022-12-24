import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import Picture from "../../../Assets/Image/default_music_icon.jpg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "#3c2e49",
  boxShadow: 24,
  p: 4,
};
const AddMedia_Artist = (props) => {
  const [open, setOpen] = React.useState(true);
  const [file, setFile] = useState(Picture);
  function handleChange_pic(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            variant="square"
            src={file}
            sx={{ bgcolor: "gray", width: 200, height: 200 }}
          ></Avatar>
          <Button variant="contained" component="label" sx={{backgroundColor: "#00cf2d",color: "#cde6fe"}}>
            اضافه کردن عکس
            <input type="file" onChange={handleChange_pic} hidden />
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default AddMedia_Artist;
