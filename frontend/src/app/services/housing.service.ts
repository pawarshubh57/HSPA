import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http : HttpClient) { }

  getAllProperties(): Observable<IProperty[]>{
   return this.http.get('data/properties.json').pipe(
     map(data => {
       const propertiesArray : Array<IProperty> = [];
       var something : any = data;
       for(const d in something){
         propertiesArray.push(something[d]);
       }
        return propertiesArray;
     })
   );
  }
}
