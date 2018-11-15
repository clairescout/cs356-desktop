import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    SearchComponent,
    SubmitReviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [BookDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
