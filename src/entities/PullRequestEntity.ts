import DataFetcher, { AzEndpoints } from "../providers/DataFetcher";

import { Project } from "../types/api";

interface Repository {
  id: string;
  name: string;
  url: string;
  project: Project;
}

interface Avatar {
  href: string;
}

interface Links {
  avatar: Avatar;
}

interface CreatedBy {
  displayName: string;
  url: string;
  _links: Links;
  id: string;
  uniqueName: string;
  imageUrl: string;
  descriptor: string;
}

interface LastMergeSourceCommit {
  commitId: string;
  url: string;
}

interface LastMergeTargetCommit {
  commitId: string;
  url: string;
}

interface LastMergeCommit {
  commitId: string;
  url: string;
}

interface Avatar2 {
  href: string;
}

interface Links2 {
  avatar: Avatar2;
}

interface Reviewer {
  reviewerUrl: string;
  vote: number;
  hasDeclined: boolean;
  isFlagged: boolean;
  displayName: string;
  url: string;
  _links: Links2;
  id: string;
  uniqueName: string;
  imageUrl: string;
  isContainer?: boolean;
}

interface CompletionOptions {
  mergeCommitMessage: string;
  deleteSourceBranch: boolean;
  mergeStrategy: string;
  transitionWorkItems: boolean;
  autoCompleteIgnoreConfigIds: any[];
}

interface Avatar3 {
  href: string;
}

interface Links3 {
  avatar: Avatar3;
}

interface AutoCompleteSetBy {
  displayName: string;
  url: string;
  _links: Links3;
  id: string;
  uniqueName: string;
  imageUrl: string;
  descriptor: string;
}

export default class PullRequestEntity {
  repository: Repository;
  pullRequestId: number;
  codeReviewId: number;
  status: string;
  createdBy: CreatedBy;
  creationDate: Date;
  title: string;
  sourceRefName: string;
  targetRefName: string;
  mergeStatus: string;
  isDraft: boolean;
  mergeId: string;
  lastMergeSourceCommit: LastMergeSourceCommit;
  lastMergeTargetCommit: LastMergeTargetCommit;
  lastMergeCommit: LastMergeCommit;
  reviewers: Reviewer[];
  url: string;
  completionOptions: CompletionOptions;
  supportsIterations: boolean;
  autoCompleteSetBy: AutoCompleteSetBy;

  constructor(private dataFetcher: DataFetcher) {}
}
