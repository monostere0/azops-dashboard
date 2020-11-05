export enum AzEndpoints {
  PIPELINES = "_apis/pipelines?api-version=6.1-preview.1",
  RUNS = "_apis/pipelines/{pipelineId}/runs?api-version=6.1-preview.1",
  REPOSITORIES = "/_apis/git/repositories?api-version=6.1-preview.1",
  PULL_REQUESTS = "/_apis/git/pullrequests?api-version=6.1-preview.1",
}

export default class AzureDevopsProjectEntity {
  constructor(
    private orgName: string,
    private projName: string,
    private accessToken: string
  ) {}

  private replaceEndpointParams(
    endpoint: string,
    paramsMap: Record<string, string>
  ): string {
    let replacedParamsEndpoint = endpoint;
    for (const key in paramsMap) {
      replacedParamsEndpoint = replacedParamsEndpoint.replace(
        key,
        paramsMap[key]
      );
    }

    return replacedParamsEndpoint;
  }

  private async fetchAzData(
    azEndpoint: AzEndpoints,
    paramsMap: Record<string, string> = {},
    httpMethod: string = "GET"
  ): Promise<any> {
    const response = await fetch(
      `https://dev.azure.com/${this.orgName}/${
        this.projName
      }/${this.replaceEndpointParams(azEndpoint.toString(), paramsMap)}`,
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

  public async getRuns(pipelineId: string) {
    return this.fetchAzData(AzEndpoints.RUNS, { "{pipelineId}": pipelineId });
  }

  public async getRepositories() {
    return this.fetchAzData(AzEndpoints.REPOSITORIES);
  }

  public async getPullRequests() {
    return this.fetchAzData(AzEndpoints.PULL_REQUESTS);
  }
}
