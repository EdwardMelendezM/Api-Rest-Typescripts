import express from "express";
import "dotenv/config";
import cors from "cors";
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
export { app };
