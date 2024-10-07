import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productactions";
import { Box, styled, Typography } from "@mui/material";
import { Actionitems } from "./Actionitems";
import { ProductDetails } from "./ProductDetails";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;
const Container = styled(Box)`
  background: #ffffff;
  display: flex;
`;
const Rightcontainer = styled(Box)`
  margin-top: 50px;
`;

export const DetailView = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  console.log(product);
  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);
  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container>
          <Box>
            <Actionitems product={product} />
          </Box>
          <Rightcontainer>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "878787", fontSize: 14 }}>
              8 Ratings & 1 Review
              <Box component="span">
                <img
                  src={fassured}
                  alt="fassured"
                  style={{ width: 77, marginLeft: 20 }}
                />
              </Box>
            </Typography>
            <Typography>
              <Box component="span" style={{ fontSize: 28 }}>
                ₹{product.price.cost}
              </Box>
              &nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: "#878787" }}>
                <strike>{product.price.mrp}</strike>
              </Box>{" "}
              &nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: "#388E3C" }}>
                {product.price.discount}
              </Box>
            </Typography>
            <ProductDetails product={product} />
          </Rightcontainer>
        </Container>
      )}
    </Component>
  );
};
