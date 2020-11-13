import DataFetcher from "../services/DataFetcher";

export default class BuildEntity {
  _links: any;
  properties: any;
  tags: any[];
  validationResults: any[];
  plans: any[];
  triggerInfo: any;
  id: number;
  buildNumber: string;
  status: string;
  result: string;
  queueTime: Date;
  startTime: Date;
  finishTime: Date;
  url: string;
  definition: any;
  buildNumberRevision: number;
  project: any;
  uri: string;
  sourceBranch: string;
  sourceVersion: string;
  queue: any;
  priority: string;
  reason: string;
  requestedFor: any;
  requestedBy: any;
  lastChangedDate: Date;
  lastChangedBy: any;
  orchestrationPlan: any;
  logs: any;
  repository: any;
  keepForever: boolean;
  retainedByRelease: boolean;
  triggeredByBuild?: any;

  constructor(private dataFetcher: DataFetcher) {}
}
