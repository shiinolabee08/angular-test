import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ApiService } from './data/api.service';
import { InMemoryOrderService } from './data/app-data';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryOrderService),
  ],
  declarations: [AppComponent],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
