import { Button, IconButton, Rating, Tooltip } from "@mui/material";
import React from "react";
import styled from "styled-components";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ModalBox from "../ModalBox/ModalBox";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../Redux/cartAction";

const CardBox = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [singleData, setSingleData] = React.useState({});
  const { title, price, category, image, rating, id } = data;

  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
    setSingleData(data);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CardBoxContainer>
      <CardBoxImageContainer>
        <img src={image} alt="" />
        <ButtonBox>
          <Tooltip title="Add to Wishlist" placement="top">
            <IconButton aria-label="add">
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Compare" placement="top">
            <IconButton aria-label="compare">
              <CompareArrowsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Quick View" placement="top">
            <IconButton aria-label="quick" onClick={handleOpen}>
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <ModalBox open={open} handleClose={handleClose} data={singleData} />
        </ButtonBox>
      </CardBoxImageContainer>
      <CardBoxTextContainer>
        <Link to="/">
          <p>{category}</p>
        </Link>
        <Link to={`/singleItem/${id}`}>
          <h4>{title}</h4>
        </Link>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating name="read-only" value={rating.rate} readOnly />
        </Box>
        <div>
          <h3>${price}</h3>
          <Button onClick={() => dispatch(addToCart(data))} variant="contained">
            Add{" "}
          </Button>
        </div>
      </CardBoxTextContainer>
    </CardBoxContainer>
  );
};

export default CardBox;
const CardBoxImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 60%;
    height: 300px;
    padding: 10px;
  }
`;
const ButtonBox = styled.div`
  height: 15%;
  border: 1px solid lightgray;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  right: auto;
  background-color: white;
  padding-top: 10px;
`;
const CardBoxContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;

  ${ButtonBox} {
    transform: scale(0);
    transition: all 0.5s linear;
  }
  :hover ${ButtonBox} {
    transform: scale(1);
    transition: all 0.5s linear;
  }
`;

const CardBoxTextContainer = styled.div`
  padding: 15px;
  a {
    text-decoration: none;
    color: black;
    h4 {
      width: 90%;
      height: 80px;
    }
    :hover h4 {
      color: tomato;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 40%;
    }
  }
`;
