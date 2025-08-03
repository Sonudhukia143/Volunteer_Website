import { Router } from 'express';
import RegisterCn from "../controllers/Register.js"

const router = Router();

router.post('/' , RegisterCn);

export default router;