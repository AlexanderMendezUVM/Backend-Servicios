import express from "express";
import connectDB from './db.js'; 

import ping from "node-http-ping";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL;

connectDB();

import authRoutes from "./routes/auth.routes.js";
import servicioRoutes from "./routes/servicios.routes.js";

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.json("Servicios");
});


app.get("/ping/:host", async (req, res) => {
  const host = req.params.host;  
  try {
    const result = await ping(host);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Ping failed", details: err.message });
  }
});


app.use("/api/auth", authRoutes);
app.use("/api/servicios", servicioRoutes);


// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
