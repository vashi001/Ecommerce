import { Box } from "@mui/material";
//components
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { DetailView } from "./components/details/DetailView";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        {/* intially after adding hme component we wont see ant change bcz material ui generally adds position fixed to header but we need the fixed position hence we apply some css  */}
        <Box style={{ marginTop: "54px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
