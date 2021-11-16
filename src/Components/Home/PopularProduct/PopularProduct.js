import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import ProductService from "../../../service/ProductService";
import styled from "styled-components";

import CardBox from "../../Common/CardBox/CardBox";
const PopularProduct = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    ProductService.getProduct().then((res) => setData(res));
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid xl={12}>
          <h2>Popular Product</h2>
        </Grid>
      </Grid>
      <Grid container>
        {data?.map((product, i) => (
          <Grid key={i} xl={3}>
            <Item>
              <CardBox data={product} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularProduct;
const Item = styled.div`
  margin-right: 15px;
  margin-bottom: 15px;
`;
