import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { Country } from 'src/app/model/country';
import { FormControl } from '@angular/forms';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
   formCountry :FormGroup = new FormGroup({
    CountryName: new FormControl(
      [Validators.required]),
    CountryCode: new FormControl(),
    Year: new FormControl(),
    id: new FormControl(),
   });
   submitted = false;

  @ViewChild('country') country!:NgForm;

  constructor(private countryservice:CountryService) { }

  ngOnInit(): void {
  }

  addCountry(){
    if(this.country.valid){
      let ct:Country = this.country.value;
      this.countryservice.insertCountry(ct).subscribe(
        data=>{
          console.log(data);
        },
        error=>{
          console.log(error);
        }
      )

    }else{

    }



  }


  addCountryReactive(){
    this.submitted = true;
    console.log(this.formCountry.value);
  }

}
