import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  getAllCountrys(page?:any,limit?:any):Observable<Country[]>{
    return this.http.get<Country[]>(environment.hosts+'countrys?_page='+page+'&_limit='+limit);
  }

  getall():Observable<Country[]>{
    return this.http.get<Country[]>(environment.hosts+'countrys');
  }

  updateCountry(country:Country){
    return this.http.put<Country>(environment.hosts+'countrys/'+country.id,country);
  }

  insertCountry(country:Country){
    return this.http.post<Country>(environment.hosts+'countrys',country);
  }
}
