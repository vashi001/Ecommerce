import mongoose from "mongoose";
export const Connection = async (USERNAME, PASSWROD) => {
  const mongoURI = `mongodb+srv://${USERNAME}:${PASSWROD}@cluster0.m8gqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  const URL = `mongodb://localhost:27017`;
  try {
    await mongoose.connect(URL);
    console.log("Database connection established successfully");
  } catch (error) {
    console.error("Error connecting to the database", error.message);
  }
};
export default Connection;
