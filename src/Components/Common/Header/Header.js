import { Container, Grid } from "@mui/material";
import React from "react";
import Logo from "../../../Assests/Image/Logo.png";
import styled from "styled-components";
import SearchSelect from "../SearchSelect/SearchSelect";

const Header = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={1}>
          <Item>
            <ImageContainer>
              <img src={Logo} alt="" className="" />
            </ImageContainer>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <SearchSelect />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
const Item = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  img {
    max-width: 120px;
  }
`;
