import { Router } from "express";
import words from "../handlers/words";
import rank from "../handlers/rank";
 const router=Router();
console.log("routes here")
router.get("/api/words",words)
router.post("/api/rank", rank);
export default router;
