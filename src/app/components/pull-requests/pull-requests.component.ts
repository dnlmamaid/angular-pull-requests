import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PullRequest } from 'src/app/models/pull-requests';
import { AngularService } from 'src/app/services/angular.service';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.scss'],
})
export class PullRequestsComponent implements OnInit {
  public pullRequests$: any;

  constructor(private router: Router, private angularService: AngularService) {}

  ngOnInit(): void {
    this.pullRequests$ = this.angularService
      .getAngularRepositoryPullRequests()
      .pipe(
        map((pullRequests) => (pullRequests.length > 0 ? pullRequests : null))
      );
  }

  openPullRequest = (pullRequest: PullRequest) =>
    this.router.navigate([`/pull-requests/${pullRequest.number}/details`]);
}
