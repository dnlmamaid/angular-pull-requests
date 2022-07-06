import { PullRequest } from './pull-requests';

export interface Repository {
  full_name: string;
  description: string;
  pullRequests: Array<PullRequest>;
}
