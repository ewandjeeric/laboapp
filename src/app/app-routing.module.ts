import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrysComponent } from './template/countrys/countrys.component';
import { StepComponent } from './template/step/step.component';
import { AddCountryComponent } from './template/countrys/add-country/add-country.component';

const routes: Routes = [
  {path:"countrys", component:CountrysComponent},
  {path:"step", component:StepComponent},
  {path:"add-country",component:AddCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
