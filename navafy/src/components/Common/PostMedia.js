import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import pic from "../../Assets/Image/The_Weeknd_-_Blinding_Lights.png";
import MyTextfield from "./MyTextfield";
import MyButton from "./MyButton";
import { Divider, TextField } from "@mui/material";
export default function PostMediaPopUp(props) {
  const [open, setOpen] = React.useState(false);
  const [comment, setcomment] = React.useState("");
  const [isChanging, setisChanging] = React.useState(false);
  const handleComment = (e) => {
    setcomment(e.target.value);
    console.log(comment);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = () => {
    setisChanging(!isChanging);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent scrol={false} style={{ backgroundColor: "#423453" }}>
          <Grid xs={12} container direction="row-reverse">
            <Grid xs={4} container direction="column">
              <img
                src={pic}
                height={120}
                width={120}
                className="shadow"
                style={{ margin: 5 }}
              />
            </Grid>

            <Grid xs={8} container direction="column">
              <h4
                style={{
                  color: "white",
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 5,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                آهنگ
              </h4>
              <h1
                style={{
                  color: "white",
                  fontSize: 30,
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 5,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {props.musicName}
              </h1>

              <h5
                style={{
                  color: "white",
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginRight: 5,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {props.singer}
              </h5>
              <Divider style={{ backgroundColor: "white" }} />
              <form onSubmit={handleClose}>
                <h6
                  style={{
                    color: "white",
                    fontFamily: "Vazirmatn",
                    textAlign: "right",
                    marginRight: 5,
                    marginTop: 25,
                    marginBottom: 0,
                    textAlign: "center",
                  }}
                >
                  {"کامنت بگذارید"}
                </h6>
                <TextField
                  disabled={!isChanging}
                  id="outlined-multiline-flexible"
                  style={{ direction: "rtl" }}
                  maxRows={4}
                  multiline
                  value={comment}
                  sx={{
                    "& > :not(style)": {
                      backgroundColor: "white",
                      fontFamily: "Vazirmatn",
                      fontSize: 12,
                    },
                  }}
                  onChange={handleComment}
                ></TextField>
                <DialogActions>
                  <MyButton
                    btntext="بازگشت"
                    onClick={() => {
                      handleClose();
                    }}
                    variant="contained"
                    style={{
                      margin: 5,
                      backgroundColor: "#00cf2d",
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "Vazirmatn",
                      height: 30,
                      width: 80,
                      fontSize: 14,
                      borderRadius: 5,
                    }}
                  />
                  {isChanging ? (
                    <MyButton
                      btntext="ثبت"
                      onClick={handleChange}
                      variant="contained"
                      style={{
                        margin: 5,
                        backgroundColor: "#00cf2d",
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Vazirmatn",
                        height: 30,
                        width: 80,
                        fontSize: 14,
                        borderRadius: 5,
                      }}
                    />
                  ) : (
                    <MyButton
                      btntext="ویرایش"
                      onClick={handleChange}
                      variant="contained"
                      style={{
                        margin: 5,
                        backgroundColor: "#00cf2d",
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Vazirmatn",
                        height: 30,
                        width: 80,
                        fontSize: 14,
                        borderRadius: 5,
                      }}
                    />
                  )}
                </DialogActions>
              </form>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
