import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignageConfigurationComponent } from './signage-configuration/signage-configuration.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SignageConfigurationComponent },
  { path: 'create-ads', component: CreateAdsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
