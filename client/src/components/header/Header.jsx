import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
//Components import
import { Search } from "./Search";
import { CustomButonns } from "./CustomButonns";
// box is similar to div in html and inside the style component in img src we have to use camel casing and for styled section we have to use normal lowe and hypen casing
// typography is an replacement of p tag
const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
export const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <StyleHeader>
        <Toolbar style={{ minHeight: "55px" }}>
          <MenuButton aria-label="delete" color="inherit" onClick={handleOpen}>
            <MenuIcon />
          </MenuButton>
          <Drawer open={open} onClick={handleClose}>
            <Box style={{ width: "200px" }} onClick={handleClose}>
              <List>
                <ListItem button>
                  <CustomButonns />
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Component to="/">
            <img src={logoURL} alt="logo" style={{ width: "75px" }} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                {/* &nbsp;gives space  */}
                <Box component="span" style={{ color: "#FFE500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={subURL} alt="Plus Logo" srcset="" />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButonns />
          </CustomButtonWrapper>
        </Toolbar>
      </StyleHeader>
    </>
  );
};
