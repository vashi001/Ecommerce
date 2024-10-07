import { Box, styled, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
const Heading = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;
const Actuhead = styled(Typography)`
  color: #878787;
`;
const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;
const Pric = styled(Box)`
  float: right;
`;
const Dicc = styled(Typography)`
  color: green;
  font-weight: 600;
`;
export const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    totalAmount();
  }, [cartItems]);
  const totalAmount = () => {
    let price = 0;
    let discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };
  return (
    <Box>
      <Heading>
        <Actuhead>PRICE DETAILS</Actuhead>
      </Heading>
      <Container>
        <Typography>
          PRICE ({cartItems?.length} item)
          <Pric component="span">₹{price}</Pric>
        </Typography>
        <Dicc>
          DISCOUNT
          <Pric component="span">-₹{discount}</Pric>
        </Dicc>
        <Typography>
          Delivery Charges
          <Pric component="span">₹40</Pric>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Pric component="span">₹{price - discount + 40}</Pric>
        </Typography>
        <Typography>You Will Save ₹{discount - 40} on this order</Typography>
      </Container>
    </Box>
  );
};
