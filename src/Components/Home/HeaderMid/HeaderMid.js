import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropDown from "../../Common/DropDown/DropDown";

const HeaderMid = () => {
  return (
    <HeaderMidBox>
      <Container maxWidth="xl">
        <Grid container>
          <Grid Item lg={2}>
            <Item>
              <DropDown />
            </Item>
          </Grid>
          <Grid Item lg={7}>
            <ItemLink>
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Shop</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Contact</Link>
            </ItemLink>
          </Grid>
          <Grid Item lg={3}>
            <Item>192000000</Item>
          </Grid>
        </Grid>
      </Container>
    </HeaderMidBox>
  );
};

export default HeaderMid;
const HeaderMidBox = styled.div`
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
`;
const Item = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemLink = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 18px;
    color: black;
    font-weight: bold;
  }
`;
