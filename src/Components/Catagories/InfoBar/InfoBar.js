import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import CardBox from "../../Common/CardBox/CardBox";
import { useParams } from "react-router";
import CatagoriesService from "../../../service/CatagoriesService";
const InfoBar = () => {
  let productName = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    CatagoriesService.getProductByID(productName.catagoriesName).then((res) =>
      setData(res)
    );
  }, [productName.catagoriesName]);
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xl={12}>
          <ItemUpper>
            <h2>Hello</h2>
          </ItemUpper>
        </Grid>
      </Grid>

      <Grid container>
        {data?.map((product) => (
          <Grid xl={3}>
            <Item>
              <CardBox key={product.id} data={product} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InfoBar;
const ItemUpper = styled.div`
  width: 100%;
  height: 200px;
  background-color: tomato;
  border-radius: 15px;
  margin: 20px 0;
`;
const Item = styled.div`
  margin-right: 15px;
  margin-bottom: 15px;
`;
