export interface PullRequest {
  number: string;
  title?: string;
  state: string;
  created_at: string;
  requested_reviewers: string[];
}
