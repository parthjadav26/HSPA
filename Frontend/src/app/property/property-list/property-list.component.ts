import { Component } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { error } from 'console';
import { Property } from '../property';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCardComponent,CommonModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  Properties: Array<Property> = [];
  sellRent = 1;

  constructor(private route:ActivatedRoute ,private housingService:HousingService){}

  ngOnInit(): void{
    if(this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      data=>{
        this.Properties = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
}
