import { Component, Input } from "@angular/core";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Property } from "../property";
import { RouterLink } from "@angular/router";

@Component({
    selector:'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css'],
    imports: [CurrencyPipe, RouterLink,CommonModule]
    
})

export class PropertyCardComponent{
   @Input() property!: Property;
}