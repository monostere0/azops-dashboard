import AzureDevopsProjectEntity from "../entities/AzureDevopsProjectEntity";

export default class AzureDevopsService {
  constructor(
    private orgName: string,
    private projNames: string[],
    private accessToken: string
  ) {}

  public getProjects(): AzureDevopsProjectEntity[] {
    return this.projNames.map(
      (projName: string) =>
        new AzureDevopsProjectEntity(this.orgName, projName, this.accessToken)
    );
  }
}
