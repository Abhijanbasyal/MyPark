import express from "express";

import { signup } from "../../controller/Auth/signup.js";
import { signin } from "../../controller/Auth/signin.js";
import { signout } from "../../controller/Auth/signout.js";

const router = express.Router();


router.post("/sign-up", signup);
router.post("/sign-in", signin);
router.post("/sign-out", signout);



export default router;