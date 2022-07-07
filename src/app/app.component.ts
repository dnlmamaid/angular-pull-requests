import { Component, OnInit } from '@angular/core';
import { AngularService } from './services/angular.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public pullRequests$: any;
  public title: string = 'angular-pull-requests';
  public description!: string;
  public fullRepositoryName!: string;

  constructor(private angularService: AngularService) {}

  ngOnInit(): void {
    this.angularService.getAngularRepository().subscribe((res) => {
      this.fullRepositoryName = res.full_name;
      this.title = this.fullRepositoryName;
      this.description = res.description;
    });
  }
}
