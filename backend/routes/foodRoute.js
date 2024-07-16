import express from "express";
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from "multer"
import foodModel from "../models/foodModel.js";

const foodRouter = express.Router();

/**
 * *image storage engine
 */

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.get("/list",listFood);
foodRouter.post("/add",upload.single("image"), addFood);
foodRouter.post("/remove",removeFood);


export default foodRouter;