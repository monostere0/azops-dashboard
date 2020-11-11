import PullRequestEntity from "./PullRequestEntity";
import DataFetcher, { AzEndpoints } from "../providers/DataFetcher";
import { plainToClass } from "class-transformer";

import { Project } from "../types/api";

export default class RepositoryEntity {
  public id: string;
  public name: string;
  public url: string;
  public project: Project;
  public defaultBranch: string;
  public size: number;
  public remoteUrl: string;
  public sshUrl: string;
  public webUrl: string;
  public isFork?: boolean;

  constructor(private dataFetcher: DataFetcher) {}

  public async getPullRequests(): Promise<PullRequestEntity[]> {
    const { value: repositories } = await this.dataFetcher.fetch<{
      value: PullRequestEntity[];
    }>(AzEndpoints.PULL_REQUESTS, { "{repositoryId}": this.id });

    return repositories.map((pullRequest) =>
      plainToClass(PullRequestEntity, {
        ...pullRequest,
        dataFetcher: this.dataFetcher,
      })
    );
  }
}
