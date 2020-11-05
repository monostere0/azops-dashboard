export class LocalStorage {
  public getItem(keyName: string): any {
    const rawValue = window.localStorage.getItem(keyName);

    if (!rawValue) {
      return null;
    }

    try {
      return JSON.parse(rawValue);
    } catch (error) {
      return null;
    }
  }

  public setItem(keyName: string, value: any) {
    return window.localStorage.setItem(keyName, JSON.stringify(value));
  }
}

export default new LocalStorage();
