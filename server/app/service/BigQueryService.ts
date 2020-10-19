const { BigQuery } = require("@google-cloud/bigquery");
const BQ_CONFIG_PATH =
  "/Users/motoki.kasahara/development/gs_practice/connect_bq/server/config/bq.json";
const BQ_CONFIG = require(BQ_CONFIG_PATH);

const bigquery = new BigQuery({
  projectId: BQ_CONFIG.project_id,
  keyFilename: BQ_CONFIG_PATH,
});

export interface Covid19Data {
  year: number;
  month: number;
  date: number;
  prefectureNameJ: string;
  prefectureNameE: string;
  testedPositive: number;
  peopleTested: number;
  hospitalized: number;
  deaths: string;
}

export class BigQueryService {
  public read = async (query: string): Promise<Covid19Data[]> => {
    const options = {
      query: query,
      useLegacySql: false,
    };
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);
    const rows = await job.getQueryResults();
    return rows[0];
  };
}
