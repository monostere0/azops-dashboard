const ORG_NAME = "nn-apps";
const PROJ_NAME = "Pulsar";
const PAT = "t5yn33rgcs3q5ads32pqtvgk45j4con7vctwptfilpwyjid25kza";

export enum AzEndpoints {
  PIPELINES = "_apis/pipelines?api-version=6.1-preview.1",
  RUNS = "_apis/runs?api-version=6.1-preview.1",
}

export default class AzureDevops {
  constructor(
    private orgName: string,
    private projName: string,
    private accessToken: string
  ) {}

  private async fetchAzData(
    azEndpoint: AzEndpoints,
    httpMethod: string = "GET"
  ): Promise<any> {
    const response = await fetch(
      `https://dev.azure.com/${this.orgName}/${this.projName}/${azEndpoint}`,
      {
        method: httpMethod,
        headers: {
          Authorization: `Basic ${btoa(`:${this.accessToken}`)}`,
          Accept: "application/json",
        },
      }
    );

    return response.json();
  }

  public async getPipelines() {
    return this.fetchAzData(AzEndpoints.PIPELINES);
  }

  public async getRuns() {
    return this.fetchAzData(AzEndpoints.RUNS);
  }
}

async function fetchAzData(azEndpoint: string) {
  const finalEndpoint = `https://dev.azure.com/${ORG_NAME}/${PROJ_NAME}/${azEndpoint}`;
  const response = await fetch(finalEndpoint, {
    headers: {
      Authorization: `Basic ${btoa(`:${PAT}`)}`,
      Accept: "application/json",
    },
  });

  return response.json();
}

export { fetchAzData };
