import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { CommonModule } from '@angular/common';
import { PullRequestDetailsComponent } from './components/pull-requests/pull-request-details/pull-request-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    PullRequestsComponent,
    PullRequestDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports:[
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
