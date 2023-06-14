import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FoodpageComponent } from './foodpage/foodpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'foodpage/:id', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
