import { Router } from "express";
import Controller from "../controller/sample.controller";

const router = Router();
const controller = new Controller();

router.get('/login', controller.samplefunction);

export default router;