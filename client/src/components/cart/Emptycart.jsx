import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Compnt = styled(Box)`
  heighta: 65vh;
  width: 80%;
  background: #fff;
  margin: 80px 140px;
`;
const Cont = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;
export const Emptycart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <Compnt>
      <Cont>
        <img src={imgurl} alt="empty" style={{ width: "15%" }} />
        <Typography>Your Cart is Empty!!</Typography>
        <Typography>Add items to it now</Typography>
      </Cont>
    </Compnt>
  );
};
