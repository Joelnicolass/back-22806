import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://joelnicolass:FwCQEHWaAvITHdez@db01.cim3njw.mongodb.net/test",
      {}
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
