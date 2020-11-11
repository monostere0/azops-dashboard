import ProjectEntity from "../entities/ProjectEntity";

export default class AzureDevopsService {
  constructor(private projNames: string[]) {}

  public getProjects(): ProjectEntity[] {
    return this.projNames.map(
      (projName: string) => new ProjectEntity(projName)
    );
  }
}
