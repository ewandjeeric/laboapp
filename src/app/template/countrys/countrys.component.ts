import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { map, of} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { startWith } from 'rxjs/internal/operators/startWith';
import { AppDataState, Country, DataStateEnum } from 'src/app/model/country';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-countrys',
  templateUrl: './countrys.component.html',
  styleUrls: ['./countrys.component.css']
})
export class CountrysComponent implements OnInit {

  page = '1';
  limit = '10';
  readonly dataStateEnum = DataStateEnum;
  countrys$:Observable<AppDataState<Country[]>>|null = null;
  couns?:Country[];

  constructor(private countryservice:CountryService) { }

  ngOnInit(): void {
    this.getAllCountrys(this.page,this.limit);
  }

  getAllCountrys(page:any, limit:any){
    this.countrys$ = this.countryservice.getAllCountrys(page,limit).pipe(
      map(data=>({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    )
  }

  updateall(){

    let i = 0;

    this.couns?.forEach(element => {
      element.Vsd = ++i;
      this.countryservice.updateCountry(element).subscribe(
        data=>{
          console.log(data);
        },
        error=>{
          console.log(error.error)
        }
      );
      //console.log(element);
    });

  }


  previous(){

  }

  next(){

  }

  size(size:any){
    this.limit = size;
    if(size == "all"){
      this.countrys$ = this.countryservice.getall().pipe(
        map(data=>({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
      this.countrys$.forEach(result => {
        this.couns = result.data;

      });
    }
    else{
    this.limit = size;
    this.getAllCountrys(this.page,this.limit);
    }
  }

  first_last(page:any){
    if(page == "last"){
    this.getAllCountrys(page,this.limit);
    }
    else if(page == "first"){
      this.getAllCountrys(page,this.limit);
    }
  }



}
