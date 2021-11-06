import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import little from "../../../Assests/Image/cat-13.png";
import big from "../../../Assests/Image/banner-2.png";
import CatagoriesService from "../../../service/CatagoriesService";
import { Link } from "react-router-dom";

const CatagoriesSection = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    CatagoriesService.getProduct().then((res) => setData(res));
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid xl={12}>
          <h2>Featured Categories</h2>
        </Grid>
        <Grid xl={12}>
          {data.map((cat, i) => (
            <LittleItemBox key={i}>
              <Link to={`/catagories/${cat}`}>
                <img src={little} alt="" />
                <h3>{cat}</h3>
                <p>26 Items</p>
              </Link>
            </LittleItemBox>
          ))}
        </Grid>
      </Grid>
      <Grid container>
        <Grid xl={4}>
          <BigItemBox style={{ backgroundImage: `url(${big})` }}>
            <div className="big_box">
              <h2>Everyday Fresh & Clean with Our Products </h2>
              <button>Shop Now</button>
            </div>
          </BigItemBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CatagoriesSection;
const BigItemBox = styled.div`
  width: 100%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .big_box {
    width: 50%;
    padding: 0 20px;
    button {
      border: none;
      padding: 15px;
      background-color: lightgreen;
      border-radius: 8px;
      transition: all 0.5s linear;
      :hover {
        background-color: tomato;
        padding-right: 30px;
        transition: all 0.5s linear;
      }
    }
  }
`;
const LittleItemBox = styled.button`
  border: none;
  border-radius: 8px;
  margin: 10px;
  transition: all 0.5s linear;
  width: 23.5%;
  a {
    text-decoration: none;
    color: black;
  }

  :hover {
    color: white;
    border: 1px solid black;
    transition: all 0.5s linear;
  }
  :hover img {
    scale: 1.2;
    transition: all 0.5s linear;
  }
  img {
    transition: all 0.5s linear;
  }
`;
