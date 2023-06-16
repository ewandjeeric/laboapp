import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountrysComponent } from './template/countrys/countrys.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepComponent } from './template/step/step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './component/input/input.component';
import { AddCountryComponent } from './template/countrys/add-country/add-country.component';
import { LabelComponent } from './component/label/label.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatStepperModule } from '@angular/material/stepper'


@NgModule({
  declarations: [
    AppComponent,
    CountrysComponent,
    StepComponent,
    InputComponent,
    AddCountryComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
