import React from "react";
import { useEffect } from "react";
import { Box, styled } from "@mui/material";
//components
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import { Slide } from "./Slide";
import { getProducts } from "../../redux/actions/productactions";
import { useDispatch, useSelector } from "react-redux";
import { Midslide } from "./Midslide";
import { Midsection } from "./Midsection";
const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;
export const Home = () => {
  // the below one comes from store
  const { products } = useSelector((state) => state.getProducts);
  //object destrutcuring meathond
  // const getProducts = useSelector((state) => state.getProducts);
  // const { products } = getProducts;
  // {
  //   products: [{}, {}, {}];
  // }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {/* insted of using <> </> we can use fragment */}
      <Navbar />
      <Component>
        <Banner />
        <Midslide products={products} title="Deal of the Day" timer={true} />
        <Midsection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Ofeers" timer={false} />
        <Slide products={products} title="Seansons Best Picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Component>
    </>
  );
};
