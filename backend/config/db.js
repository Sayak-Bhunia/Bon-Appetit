import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sbhunia2903:sayak2903@cluster0.zdfde7x.mongodb.net/foodo').then(()=>console.log("db connected"))
}