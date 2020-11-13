export class LocalStorage {
  public getItem(keyName: string, defaultValue?: any): any {
    const rawValue = window.localStorage.getItem(keyName);

    if (!rawValue) {
      return defaultValue || null;
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
