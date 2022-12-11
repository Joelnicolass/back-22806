import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}.mongodb.net/${process.env.DB_NAME}`,
      {}
    );
    console.log("MongoDB connected " + process.env.DB_NAME);
  } catch (error) {
    console.log(error);
  }
};
