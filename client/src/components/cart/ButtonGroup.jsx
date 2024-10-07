import { Box, Button, styled, ButtonGroup } from "@mui/material";
import React from "react";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;
const Btn = styled(Button)`
  border-radius: 50%;
`;
export const BtnGroup = () => {
  return (
    <Component>
      <Btn>-</Btn>
      <Button disabled>1</Button>
      <Btn>+</Btn>
    </Component>
  );
};
