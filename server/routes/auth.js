import express from "express"


// import { createRequire } from "module";
// const require = createRequire(import.meta.url);


const router =  express.Router();

import { signup,signin,forgotPassword,resetPassword} from "../controllers/auth.js"

router.get("/",(req,res)=>{
    return res.json({
        data:"helloworld from the API",
    }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         
          throw error;
        });;
});

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/forgotPassword",forgotPassword);
router.post("/resetPassword",resetPassword);

export default router;