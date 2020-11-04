import { LocalStorage } from "../providers/localStorage";

class UserSettings {
  private readonly ORG_KEY = "ORG_NAME";
  private readonly PROJECTS_KEY = "PROJECT_NAMES";
  private readonly USER_PAT = "USER_PAT";

  constructor(private localStorage: LocalStorage) {}

  public get orgName(): string {
    return this.localStorage.getItem(this.ORG_KEY);
  }

  public set orgName(value: string) {
    this.localStorage.setItem(this.ORG_KEY, value);
  }

  public get projNames(): string[] {
    return this.localStorage.getItem(this.PROJECTS_KEY);
  }

  public set projNames(value: string[]) {
    this.localStorage.setItem(this.PROJECTS_KEY, value);
  }

  public get userToken(): string {
    return this.localStorage.getItem(this.USER_PAT);
  }

  public set userToken(value: string) {
    this.localStorage.setItem(this.USER_PAT, value);
  }
}

export { UserSettings };
export default new UserSettings(new LocalStorage());
