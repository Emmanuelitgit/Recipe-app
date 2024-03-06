import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { dbConnection } from "./db.js"
import authRoute from "../Backend/routes/auth.js"

const app = express();
const PORT = 3000;

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error starting server:', error);
  });

app.use(express.json());
app.use(cookieParser())
app.use(cors())

app.use("/", authRoute)

