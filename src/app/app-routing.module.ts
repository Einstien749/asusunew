import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DemoComponent } from './demo/demo.component';
import { PricingComponent } from './pricing/pricing.component';
const routes: Routes = [
  {
    path: "", component: HomeComponent
  }, 
  {
    path: "about", component: AboutComponent
  },
  {
    path: "demo", component: DemoComponent
  },
  {
    path: "pricing", component: PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
