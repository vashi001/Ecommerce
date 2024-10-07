import React from "react";
import {
  Box,
  styled,
  TableBody,
  TableCell,
  Typography,
  Table,
  TableRow,
} from "@mui/material";
import { LocalOfferIcon } from "@mui/icons-material";
const Smalltext = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
    margin-left: 5px;
  }
`;
const Columntext = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;
export const ProductDetails = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  return (
    <>
      <Typography>Available Offers</Typography>
      <Smalltext>
        <Typography>
          {/* <LocalOfferIcon /> */}
          10% off up to ₹749 on HDFC Bank Credit Card Transactions.T&C
        </Typography>
        <Typography>
          {/* <LocalOfferIcon /> */}
          5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
        </Typography>
        <Typography>
          {/* <LocalOfferIcon /> */}
          10% off up to ₹1,250 on HDFC Bank Credit Card Transactions. Min Txn
          Value: ₹7,499T&C
        </Typography>
        <Typography>
          {/* <LocalOfferIcon /> */}
          Get extra 74% off (price inclusive of cashback/coupon)T&C
        </Typography>
        <Typography>
          {/* <LocalOfferIcon /> */}
          Make a purchase and enjoy a surprise cashback/ coupon that you can
          redeem later!Know More
        </Typography>
        <Typography>
          {/* <LocalOfferIcon /> */}
          No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999T&C
        </Typography>
        <Typography>
          {/* <LocalOfferIcon /> */}
          10% off up to ₹1,500 on HDFC Bank Credit Card EMI Transactions. Min
          Txn Value: ₹7,499T&C
        </Typography>
      </Smalltext>
      <Table>
        <TableBody>
          <Columntext>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹60
            </TableCell>
          </Columntext>
          <Columntext>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </Columntext>
          <Columntext>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperConNet
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers starting from ₹{product.price.mrp}
              </Typography>
            </TableCell>
          </Columntext>
          <Columntext>
            <TableCell colSpan={2}>
              <img src={adURL} alt="Flipkart points" style={{ width: 390 }} />
            </TableCell>
          </Columntext>
          <Columntext>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </Columntext>
        </TableBody>
      </Table>
    </>
  );
};
