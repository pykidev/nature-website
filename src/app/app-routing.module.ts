import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'events', component: EventsPageComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
