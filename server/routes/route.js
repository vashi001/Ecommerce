import express from "express";
import { userSignup, userLogin } from "../controller/usercontroller.js";
import { getProducts } from "../controller/productcontroller.js";
import { getProductByid } from "../controller/productcontroller.js";
const router = express.Router();

// indicate if the post request has an endpoint og signup
router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProducts);
router.get("/product/:id", getProductByid);

export default router;
