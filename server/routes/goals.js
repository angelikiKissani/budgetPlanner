import express from "express"
const router =  express.Router();

import { addGoal,showGoal ,deleteGoal} from "../controllers/goals.js";

router.post("/add-goal",addGoal);
router.post("/show-goal",showGoal);
router.post("/delete-goal",deleteGoal);


export default router;