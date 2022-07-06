import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAngularRepositoryPullRequests(): Observable<any> {
    return this.http.get<any>(
      `https://api.github.com/repos/angular/angular/pulls`
    );
  }

  getAngularRepositoryPullRequestById(prId: string): Observable<any> {
    return this.http.get(
      `https://api.github.com/repos/angular/angular/pulls/${prId}`
    );
  }
}
