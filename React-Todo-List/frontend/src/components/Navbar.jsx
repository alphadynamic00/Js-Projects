import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Textbox from "./Textbox";
import { Link } from "react-router-dom";

const style = {
  position: 'absolute',
  fontFamily: "'Baloo Tamma 2', cursive",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  borderRadius: '15px',
  boxShadow: 24,
  backgroundColor: "#ffffff",
backgroundImage: 'url("https://www.transparenttextures.com/patterns/inspiration-geometry.png")',
  p: 4,
};

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>Add a Todo</center>
          <Textbox />
        </Box>
      </Modal>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">

          <a className="navbar-brand" href="/">
            Todo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'white'}} to="/imp">
                  Important
                </Link>
              </li>
              <li className="nav-item">
            <button type="button" className="btn nav-link" style={{color: 'white'}} onClick={handleOpen}>Add</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
