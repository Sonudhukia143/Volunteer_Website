import { Router } from 'express';
import AdminLogin from "../controllers/AdminLogin.js"

const router = Router();

router.post('/' , AdminLogin);

export default router;