import DataFetcher, { AzEndpoints } from "../services/DataFetcher";

import { Links } from "../types/api";

export default class PipelineEntity {
  public _links: Links;
  public url: string;
  public id: number;
  public revision: number;
  public name: string;
  public folder: string;

  constructor(private dataFetcher: DataFetcher) {}

  public async getRuns(): Promise<any[]> {
    return this.dataFetcher.fetch<any[]>(AzEndpoints.RUNS, {
      "{pipelineId}": this.id,
    });
  }
}
