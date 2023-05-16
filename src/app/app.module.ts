import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { DemoComponent } from './demo/demo.component';
import { AboutComponent } from './about/about.component';
import { Homesection3Component } from './home/homesection3/homesection3.component';
import { Homesection2Component } from './home/homesection2/homesection2.component';
import { Homesection1Component } from './home/homesection1/homesection1.component';
import { PricingplanComponent } from './pricing/pricingplan/pricingplan.component';
import { PricingheadComponent } from './pricing/pricinghead/pricinghead.component';
import { Aboutsection2Component } from './about/aboutsection2/aboutsection2.component';
import { Aboutsection1Component } from './about/aboutsection1/aboutsection1.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PricingComponent,
    DemoComponent,
    AboutComponent,
    Homesection3Component,
    Homesection2Component,
    Homesection1Component,
    PricingplanComponent,
    PricingheadComponent,
    Aboutsection2Component,
    Aboutsection1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
