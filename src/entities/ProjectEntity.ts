import DataFetcher, { AzEndpoints } from "../services/DataFetcher";
import RepositoryEntity from "../entities/RepositoryEntity";
import PipelineEntity from "../entities/PipelineEntity";
import { plainToClass } from "class-transformer";
import BuildEntity from "./BuildEntity";

export default class ProjectEntity {
  private dataFetcher: DataFetcher;
  public name: string;

  constructor(projName: string) {
    this.dataFetcher = new DataFetcher(projName);
    this.name = projName;
  }

  public async getRepositories(): Promise<RepositoryEntity[]> {
    const { value: repositories } = await this.dataFetcher.fetch<{
      value: RepositoryEntity[];
    }>(AzEndpoints.REPOSITORIES);

    const allProjectBuilds = await this.getBuilds();

    return repositories.map((repository) => {
      const buildsForRepository = allProjectBuilds.filter(
        (build) => build.repository.id === repository.id
      );

      return plainToClass(RepositoryEntity, {
        ...repository,
        dataFetcher: this.dataFetcher,
        builds: buildsForRepository,
      });
    });
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

  public async getBuilds(): Promise<BuildEntity[]> {
    const { value: builds } = await this.dataFetcher.fetch<{
      value: BuildEntity[];
    }>(AzEndpoints.BUILDS);

    return builds.map((build) =>
      plainToClass(BuildEntity, {
        ...build,
        dataFetcher: this.dataFetcher,
      })
    );
  }
}
