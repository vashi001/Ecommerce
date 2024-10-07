import React from "react";
import { useState, useContext } from "react";
import { Badge, Box, Button, Link, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LoginDailog } from "../../login/LoginDailog.jsx";
import { DataContext } from "../../context/DataProvider.jsx";
import { Profile } from "./Profile.jsx";
import { useSelector } from "react-redux";
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-tranform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;
export const CustomButonns = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <>
      <Wrapper>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <LoginButton variant="contained" onClick={() => openDialog()}>
            LOGIN
          </LoginButton>
        )}
        <Typography style={{ marginTop: 3, width: 135 }}>
          Become a Seller
        </Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>
        <Container to="/cart">
          <Badge badgeContent={cartItems?.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
          <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </Container>
      </Wrapper>
      <LoginDailog open={open} setOpen={setOpen} />
    </>
  );
};
