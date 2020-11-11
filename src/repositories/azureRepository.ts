import userSettings from "../services/UserSettingsService";
import AzureDevopsService from "../services/AzureDevopsService";
import ProjectEntity from "../entities/ProjectEntity";

class AzureRepository {
  public azureDevopsService: AzureDevopsService;
  constructor() {
    if (
      !userSettings.orgName ||
      !userSettings.projNames ||
      !userSettings.userToken
    ) {
      throw new Error("User settings mising.");
    }

    this.azureDevopsService = new AzureDevopsService(userSettings.projNames);
  }

  public getProjects(): ProjectEntity[] {
    return this.azureDevopsService.getProjects();
  }
}

export default new AzureRepository();
