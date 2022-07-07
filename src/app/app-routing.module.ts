import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PullRequestDetailsComponent } from './components/pull-requests/pull-request-details/pull-request-details.component';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pull-requests',
    pathMatch: 'full',
  },
  { path: 'pull-requests', component: PullRequestsComponent },
  {
    path: 'pull-requests/:id/details',
    component: PullRequestDetailsComponent,
  },
  { path: '**', component: Error },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
