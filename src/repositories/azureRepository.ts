import userSettings from "../services/UserSettings";
import ProjectEntity from "../entities/ProjectEntity";

class AzureRepository {
  private projNames: string[];

  constructor() {
    if (!userSettings.projNames) {
      throw new Error("Project names setting not set.");
    }

    this.projNames = userSettings.projNames;
  }

  public getProjects(): ProjectEntity[] {
    return this.projNames.map(
      (projName: string) => new ProjectEntity(projName)
    );
  }
}

export default new AzureRepository();
