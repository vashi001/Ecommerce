import React from "react";
import { InputBase, Box, styled, ListItem, List } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productactions";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearch = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIcn = styled(SearchIcon)`
  color: blue;
  padding: 5px;
  display: flex;
`;
const Listwrapper = styled(List)`
  position: absolute;
  backgound: #ffffff;
  color: #000;
  margin-top: 36px;
`;

export const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const getText = (text) => {
    setText(text);
  };
  return (
    <>
      <SearchContainer>
        <InputSearch
          placeholder="Search for products, brands and more"
          onChange={(e) => getText(e.target.value)}
          value={text}
        />
        <Box>
          <SearchIcn />
        </Box>
        {text && (
          <Listwrapper>
            {products
              .filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase())
              )
              .map((product) => (
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => setText("")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))}
          </Listwrapper>
        )}
      </SearchContainer>
    </>
  );
};
