import { Grid, Menu } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const data = [
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
  ];
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BigButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </BigButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Grid container>
          {data?.map((item, i) => (
            <Grid key={i} item lg={6}>
              <Items onClick={handleClose}>
                <Link to="/">{item}</Link>
              </Items>
            </Grid>
          ))}
        </Grid>
      </Menu>
    </div>
  );
};

export default DropDown;
const BigButton = styled.button`
  background-color: #e76f51;
  width: 209px;
  height: 54px;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 8px;
`;
const Items = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  margin: 10px;
  a {
    text-decoration: none;
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
`;
