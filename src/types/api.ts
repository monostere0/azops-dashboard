export interface Self {
  href: string;
}

export interface Web {
  href: string;
}

export interface Links {
  self: Self;
  web: Web;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  state: string;
  revision: number;
  visibility: string;
  lastUpdateTime: Date;
}
