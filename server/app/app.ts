import express from "express";
import helmet from "helmet";
import cors from "cors";
const app = express();
app.use(helmet());
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ exteded: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 6001;

const router = require("./routes/");
app.use("/", router);

app.listen(port);
console.log(`server start! port: ${port}`);
