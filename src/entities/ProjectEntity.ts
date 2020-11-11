import DataFetcher, { AzEndpoints } from "../services/DataFetcher";
import RepositoryEntity from "../entities/RepositoryEntity";
import PipelineEntity from "../entities/PipelineEntity";
import { plainToClass } from "class-transformer";

export default class ProjectEntity {
  private dataFetcher: DataFetcher;

  constructor(private projName: string) {
    this.dataFetcher = new DataFetcher(projName);
  }

  public async getRepositories(): Promise<RepositoryEntity[]> {
    const { value: repositories } = await this.dataFetcher.fetch<{
      value: RepositoryEntity[];
    }>(AzEndpoints.REPOSITORIES);

    return repositories.map((repository) =>
      plainToClass(RepositoryEntity, {
        ...repository,
        dataFetcher: this.dataFetcher,
      })
    );
  }

  public async getPipelines(): Promise<PipelineEntity[]> {
    const { value: repositories } = await this.dataFetcher.fetch<{
      value: PipelineEntity[];
    }>(AzEndpoints.PIPELINES);

    return repositories.map((pipeline) =>
      plainToClass(PipelineEntity, {
        ...pipeline,
        dataFetcher: this.dataFetcher,
      })
    );
  }
}
