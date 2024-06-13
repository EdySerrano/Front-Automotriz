import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterOstComponent } from './register-ost/register-ost.component';
import { OstDetailsComponent } from './ost-details/ost-details.component';
import { ProblemLogComponent } from './problem-log/problem-log.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-ost', component: RegisterOstComponent },
  { path: 'ost-details', component: OstDetailsComponent },
  { path: 'problem-log', component: ProblemLogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
