import express from "express";
import helmet from "helmet";
import cors from "cors";
import { BigQueryService } from "../service/BigQueryService";
const app = express();
app.use(helmet());
app.use(cors());

const router = express.Router();

router.get("/api/healthcheck", (req, res) => {
  res.status(200).send({ message: "good!" });
});

router.get("/api/get", (req, res, next) => {
  const query = `SELECT
  year
  , month
  , date
  , prefectureNameJ
  , prefectureNameE
  , testedPositive
  , peopleTested
  , hospitalized
  , deaths
  FROM php-test-292806.test.covid19
  WHERE prefectureNameE = "Mie" limit 10`;
  const service = new BigQueryService();
  service
    .read(query)
    .then((rows) => res.status(200).send(rows))
    .catch(next);
});

app.use((req, res) => {
  res.status(404);
  res.render("error", {
    param: {
      status: 404,
      message: "page is not found",
    },
  });
});

module.exports = router;
