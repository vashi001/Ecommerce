import React from "react";
import { Slide } from "./Slide";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  display: flex;
`;
const Leftcompo = styled(Box)`
  width: 83%;
`;
//we use theme.breakpoints to handle responsiveness we can refer in mid section to understand how it is used
const Rightcompo = styled(Box)`
  background-color: #ffffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 10px;
  width: 17%;
  text-align: center;
`;
export const Midslide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <Leftcompo>
        <Slide products={products} title={title} timer={timer} />
      </Leftcompo>
      <Rightcompo>
        <img src={adURL} alt="ad" style={{ width: 217 }} />
      </Rightcompo>
    </Component>
  );
};
