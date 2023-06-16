import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Country } from 'src/app/model/country';
import { CountryService } from 'src/app/service/country.service';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {



  firstFormGroup = this._formBuilder.group({
    CountryName: ['', Validators.required],
    CountryCode: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    Year: ['', Validators.required],
    id: ['', Validators.required],
  });
  isEditable = false;
  constructor(private _formBuilder: FormBuilder, private countryservice:CountryService) { }

  ngOnInit(): void {
  }

  submitform(){

    let ct:Country = this.firstFormGroup.value;
     ct.Year = this.secondFormGroup.value.Year;
     ct.id = this.secondFormGroup.value.id;
    console.log(ct);
   /* this.ct!.CountryName = this.firstFormGroup.value.CountryName;
     this.ct!.CountryCode = this.firstFormGroup.value.CountryCode;
     this.ct!.Year = this.secondFormGroup.value.Year;
     this.ct!.id = this.secondFormGroup.value.id;
    console.log(this.ct);*/
  }

}
