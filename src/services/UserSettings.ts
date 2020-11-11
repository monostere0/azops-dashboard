import { LocalStorage } from "../providers/localStorage";

class UserSettings {
  private readonly ORG_KEY = "ORG_NAME";
  private readonly PROJECTS_KEY = "PROJECT_NAMES";
  private readonly USER_PAT = "USER_PAT";
  private readonly SHOW_EMPTY_REPOS = "SHOW_EMPTY_REPOS";

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

  public get showEmptyRepos(): boolean {
    return Boolean(this.localStorage.getItem(this.SHOW_EMPTY_REPOS));
  }

  public set showEmptyRepos(value: boolean) {
    this.localStorage.setItem(this.SHOW_EMPTY_REPOS, value);
  }
}

export { UserSettings };
export default new UserSettings(new LocalStorage());
