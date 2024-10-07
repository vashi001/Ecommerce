import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Compo = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;
const Cont = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;
export const Navbar = () => {
  return (
    <>
      <Compo>
        {navData.map((data) => (
          <Cont>
            <img src={data.url} alt="" style={{ height: "90px" }} />
            <Text>{data.text}</Text>
          </Cont>
        ))}
      </Compo>
    </>
  );
};
