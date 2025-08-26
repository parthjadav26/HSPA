import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Property } from '../property/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
getAllProperties(sellRent: number) {
  return this.http.get<{ [key: string]: Property }>('/assets/data/properties.json').pipe(
    map(data => {
      const propertiesArray = Object.values(data);
      return propertiesArray.filter(property => property.sellrent === sellRent);
    })
  );
}

}
