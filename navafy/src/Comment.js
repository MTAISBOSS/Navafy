import { SecurityUpdateRounded } from "@mui/icons-material";
import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import Login from "./components/Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <Dialog
        open={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">true</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    ) : (
      <div>h</div>
    );
  }
}
