import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PullRequest } from '../models/pull-requests';
import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root',
})
export class AngularService {
  constructor(private http: HttpClient) {}

  getAngularRepository(): Observable<Repository> {
    return this.http.get<Repository>(
      `https://api.github.com/repos/angular/angular`
    );
  }

  getAngularRepositoryPullRequests(): Observable<Array<PullRequest>> {
    return this.http.get<Array<PullRequest>>(
      `https://api.github.com/repos/angular/angular/pulls`
    );
  }

  getAngularRepositoryPullRequestById(prId: string): Observable<PullRequest> {
    return this.http
      .get<PullRequest>(
        `https://api.github.com/repos/angular/angular/pulls/${prId}`
      );
  }
}
