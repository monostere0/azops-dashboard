import userSettings from "../services/UserSettingsService";
import AzureDevopsService from "../services/AzureDevopsService";
import AzureDevopsProjectEntity from "../entities/AzureDevopsProjectEntity";

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

    this.azureDevopsService = new AzureDevopsService(
      userSettings.orgName,
      userSettings.projNames,
      userSettings.userToken
    );
  }

  public getProjects(): AzureDevopsProjectEntity[] {
    return this.azureDevopsService.getProjects();
  }
}

export default new AzureRepository();
