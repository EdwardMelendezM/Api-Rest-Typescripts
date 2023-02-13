import express from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(router);
db().then(() => console.log("Conection ready"));
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

export { app };
