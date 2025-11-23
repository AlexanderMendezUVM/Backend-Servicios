import { Router } from "express";
import { servicio, crearServicio,tablaServicio,eliminarServicio, editarServicio } from "../controllers/servicio.controller.js";
const router = Router();


router.get("/", servicio);
router.post("/", crearServicio);
router.post("/llenar", tablaServicio);
router.delete("/:id", eliminarServicio);
router.patch("/:id", editarServicio);
export default router;