import PullRequestEntity from "./PullRequestEntity";
import DataFetcher, { AzEndpoints } from "../services/DataFetcher";
import { plainToClass } from "class-transformer";

import { Project } from "../types/api";
import BuildEntity from "./BuildEntity";

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

  constructor(
    private dataFetcher: DataFetcher,
    private builds: BuildEntity[]
  ) {}

  public async getPullRequests(): Promise<PullRequestEntity[]> {
    const { value: pullRequests } = await this.dataFetcher.fetch<{
      value: PullRequestEntity[];
    }>(AzEndpoints.PULL_REQUESTS, { "{repositoryId}": this.id });

    return pullRequests.map((pullRequest) => {
      pullRequest.build = this.builds.find(
        (build) => build.sourceBranch === pullRequest.sourceRefName
      );

      console.log(pullRequest.build);

      return plainToClass(PullRequestEntity, {
        ...pullRequest,
        dataFetcher: this.dataFetcher,
      });
    });
  }
}
