import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    dominio: {
      type: String,
      require: true
    },
    estatus: {
      type: String
    },
    estatusColor: {
      type: String
    },
    ultimoPing: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("Servicios", servicioSchema);