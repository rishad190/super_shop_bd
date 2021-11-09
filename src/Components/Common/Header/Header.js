import { Container, Grid } from "@mui/material";
import React from "react";
import Logo from "../../../Assests/Image/Logo.png";
import styled from "styled-components";
import SearchSelect from "../SearchSelect/SearchSelect";

const Header = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid xl={1}>
          <Items>
            <ImageContainer>
              <img src={Logo} alt="" className="" />
            </ImageContainer>
          </Items>
        </Grid>
        <Grid xl={7}>
          <Items>
            <SearchSelect />
          </Items>
        </Grid>
        <Grid xl={2}>
          <Items>3</Items>
        </Grid>
        <Grid xl={2}>
          <Items>4</Items>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
const Items = styled.div`
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
