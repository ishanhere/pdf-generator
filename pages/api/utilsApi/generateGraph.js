import axios from "axios";
import { GET_HIGHCHART } from "../../../utils/apiConstants";

export default async function generateGraphHandler(req, res) {
  let chartData = JSON.parse(req);

  return axios.post(GET_HIGHCHART, chartData);
}
