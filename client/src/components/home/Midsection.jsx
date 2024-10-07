import React from "react";
import { imageURL } from "../../constants/data";
import { Box, Grid, styled } from "@mui/material";
const Wrapper = styled(Grid)`
  margin-top: 10px;
`;
const Image = styled("img")(({ theme }) => ({
  marginTop: "10px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));
export const Midsection = () => {
  //   console.log(imageURL);
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Image src={url} alt="covid" srcset="" />
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {imageURL.map((image) => {
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="image" style={{ width: "100%" }} />;
          </Grid>;
        })}
      </Wrapper>
    </>
  );
};
