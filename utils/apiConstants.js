import getConfig from "next/config";
const {
  publicRuntimeConfig: { NODE_ENV },
} = getConfig();

const stagingURL = "http://backend-internal.kristal-internal.com";
const parllelStagingURL = "https://staging2.kristal.ai";
const prodURL = "http://backend-internal.kristal-internal.com";
const devURL = "https://dev.kristal.ai";
let url = stagingURL;

if (NODE_ENV && NODE_ENV === "staging") {
  url = stagingURL;
} else if (NODE_ENV && NODE_ENV === "dev") {
  url = devURL;
} else if (NODE_ENV && NODE_ENV === "production") {
  url = prodURL;
} else if (NODE_ENV && NODE_ENV === "staging-parallel") {
  url = parllelStagingURL;
} else if (NODE_ENV && NODE_ENV === "development") {
  url = devURL;
}

export const env = NODE_ENV;
export const baseUrl = url;
export const GET_HIGHCHART = `${baseUrl}/highcharts-server/`;
