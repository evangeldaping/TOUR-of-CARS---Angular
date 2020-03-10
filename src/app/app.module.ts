import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule }     from './app-routing.module';
import { CarServiceComponent } from './car-service/car-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent }  from './car-detail/car-detail.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CarSearchComponent } from './car-search/car-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    WelcomeComponent, 
    CarServiceComponent,
    PageNotFoundComponent,
    MessagesComponent,
    DashboardComponent,
    CarsComponent,
    DashboardComponent,
    MessagesComponent,
    CarDetailComponent,
    CarSearchComponent
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
