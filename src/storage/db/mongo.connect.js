import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/22806", {});
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
