import { Grid2, Typography, Box, styled, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { Cartitem } from "./Cartitem";
import { TotalView } from "./TotalView";
import { Emptycart } from "./Emptycart";
const Container = styled(Grid2)`
  padding: 30px 135px;
  background: #fff;
`;
const Head = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const Placeodr = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0, 0, 0/10%);
  border-top: 1px solid #f0f0f0;
`;
const Btnn = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;
const Leftcompo = styled(Grid2)`
  padding-right: 15px;
  padding: 30px 135px;
  background: #fff;
`;
export const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <>
      {cartItems.length > 0 ? (
        <Container container>
          <Leftcompo item lg={9} md={9} sm={12} xs={12}>
            <Head>
              <Typography>My Cart ({cartItems.length}) </Typography>
            </Head>
            {cartItems.map((item) => (
              <Cartitem item={item} />
            ))}
            <Placeodr>
              <Btnn>PLACE ORDER</Btnn>
            </Placeodr>
          </Leftcompo>
          <Grid2 item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid2>
        </Container>
      ) : (
        <Emptycart />
      )}
    </>
  );
};
