import express from "express";
import {
  createresipes,
  deleteRecipe,
  getAllresipes,
  getRecibeById,
  updateRecibe,
} from "../Controllers/rescipeControler.js";

const router = express.Router();
router.post("/create", createresipes);
router.get("/getdata", getAllresipes);
router.get("/getdata/:id", getRecibeById);
router.put("/update/:id", updateRecibe);
router.delete("/delete/:id", deleteRecipe);

export default router;
