import express from "express";
import { getAllUser, Login,Logout, signUp, authenticateToken, refreshToken} from "../controllers/userController.js";

const router = express.Router();


router.get("/alluser", getAllUser);
router.post("/signup", signUp);
router.post("/login", Login);

router.get("/profile", authenticateToken);
router.post("/refresh", refreshToken)

 router.post("/logout", Logout);
// router.get("/protected-route", authenticateSession)

export default router;