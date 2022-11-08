import express from "express";
import {getImagenPokenea,getPokenea} from "../controllers/pokenea.js"
const router = express.Router()

router.route("/").get((req,res) => res.send(getPokenea()))

router.route("/image").get((req,res) => res.render("pokenea",getImagenPokenea()))

export default router
