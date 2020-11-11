import userSettings from "../services/UserSettingsService";

export enum AzEndpoints {
  PIPELINES = "_apis/pipelines?api-version=6.1-preview.1",
  RUNS = "_apis/pipelines/{pipelineId}/runs?api-version=6.1-preview.1",
  REPOSITORIES = "_apis/git/repositories?api-version=6.1-preview.1",
  PULL_REQUESTS = "_apis/git/repositories/{repositoryId}/pullrequests?api-version=6.1-preview.1",
}

export default class DataFetcher {
  private accessToken: string = userSettings.userToken;
  private orgName: string = userSettings.orgName;

  constructor(private projName: string) {}

  private replaceEndpointParams(
    endpoint: string,
    paramsMap: Record<string, any>
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

  public async fetch<T extends any>(
    azEndpoint: AzEndpoints,
    paramsMap: Record<string, any> = {},
    httpMethod: string = "GET"
  ): Promise<T> {
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
}
