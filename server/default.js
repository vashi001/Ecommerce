import { products } from "./constants/data.js";
import product from "./model/productschema.js";

const DefaultData = async () => {
  try {
    // await product.deleteMany({});
    await product.insertMany(products);
    console.log("data imported successfully");
  } catch (error) {
    console.log("error while inserting default data", error.message);
  }
};
export default DefaultData;
