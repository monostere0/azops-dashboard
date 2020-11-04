export class LocalStorage {
  public getItem(keyName: string) {
    return JSON.parse(window.localStorage.getItem(keyName));
  }

  public setItem(keyName: string, value: any) {
    return window.localStorage.setItem(keyName, JSON.stringify(value));
  }
}

export default new LocalStorage();
