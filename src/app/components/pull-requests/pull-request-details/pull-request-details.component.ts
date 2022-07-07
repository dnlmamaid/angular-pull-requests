import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PullRequest } from 'src/app/models/pull-requests';
import { AngularService } from 'src/app/services/angular.service';

@Component({
  selector: 'app-pull-request-details',
  templateUrl: './pull-request-details.component.html',
  styleUrls: ['./pull-request-details.component.scss'],
})
export class PullRequestDetailsComponent implements OnInit {
  public title!: string;
  public pullRequest!: PullRequest;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private angularService: AngularService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.angularService
        .getAngularRepositoryPullRequestById(id)
        .subscribe((res) => {
          this.pullRequest = res;
        });
    });
  }

  ngOnInit(): void {}

  navigateToDashboard() {
    this.router.navigateByUrl('');
  }
}
