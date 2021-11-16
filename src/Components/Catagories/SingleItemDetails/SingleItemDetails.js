import { Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const SingleItemDetails = ({ data }) => {
  const { title, price, image, description } = data;
  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container>
          <Grid xl={6}>
            <ImageContainer>
              <img src={image} alt="" />
            </ImageContainer>
          </Grid>
          <Grid xl={5}>
            <div>
              <h3>{title}</h3>
              <h3>$ {price}</h3>
              <p>{description}</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default SingleItemDetails;
const Wrapper = styled("div")`
  margin-top: 100px;
`;
const ImageContainer = styled("div")`
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
