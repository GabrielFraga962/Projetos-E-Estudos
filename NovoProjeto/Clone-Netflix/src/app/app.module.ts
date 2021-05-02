import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    SlickCarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
