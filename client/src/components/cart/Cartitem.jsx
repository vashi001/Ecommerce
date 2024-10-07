import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/commonutils";
import { BtnGroup } from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
const Component = styled(Box)`
  border-top: 1px solif #f0f0f0;
  display: flex;
`;
const Leftcompo = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const Smalltext = styled(Typography)`
  font-size: 14px;
  margin-top: 10px;
  color: #878787;
`;
const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;
export const Cartitem = ({ item }) => {
  const dispatch = useDispatch();
  const rmvefromcart = (id) => {
    dispatch(removeFromCart(id));
  };
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Component>
      <Leftcompo>
        <img
          src={item.url}
          alt="product"
          srcset=""
          style={{ height: 110, width: 110 }}
        />
        <BtnGroup />
      </Leftcompo>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <Smalltext>
          Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </Smalltext>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontweight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>{item.price.mrp}</strike>
          </Box>{" "}
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item.price.discount}
          </Box>
        </Typography>
        <Remove onClick={() => rmvefromcart(item.id)}>REMOVE</Remove>
      </Box>
    </Component>
  );
};
