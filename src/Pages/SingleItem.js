import { styled } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import SingleItemDetails from "../Components/Catagories/SingleItemDetails/SingleItemDetails";

import HeaderMid from "../Components/Home/HeaderMid/HeaderMid";
import ProductService from "../service/ProductService";
const SingleItem = () => {
  const [data, setData] = React.useState([]);
  const id = useParams();
  useEffect(() => {
    ProductService.getProductByID(id.id).then((response) => setData(response));
  }, [id.id]);

  return (
    <Wrapper>
      <HeaderMid />
      <SingleItemDetails data={data} />
    </Wrapper>
  );
};

export default SingleItem;
const Wrapper = styled("div")``;
