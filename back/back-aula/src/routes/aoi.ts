import { Router } from "express";
import { list } from "../controllers/aoi";

const router = Router();

router.get("/", list);

export default router;