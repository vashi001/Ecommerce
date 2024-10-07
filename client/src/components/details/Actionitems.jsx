import React from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
const Leftcontainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;
const Image = styled("img")({
  padding: "15px",
});
const Styledbutton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
`;
export const Actionitems = ({ product }) => {
  const { id } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const additemtoCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  return (
    <Leftcontainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="image" srcset="" />
      </Box>
      <Styledbutton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => additemtoCart()}
      >
        <ShoppingCartIcon /> Add to Cart
      </Styledbutton>
      <Styledbutton variant="contained" style={{ background: "#fb541b" }}>
        <FlashOnIcon /> Buy Now
      </Styledbutton>
    </Leftcontainer>
  );
};
