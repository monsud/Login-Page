import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent{
  constructor() { }
  @Input() errorMsg: string;
  @Input() displayError: boolean;

  allErrors: any = 
  {
      "minlenght": "Troppi pochi caratteri",
      "maxlenght": "Hai usato troppi caratter",
      "required":"Il campo è obbligatorio",
      "email":"Inserisci la mail in un formato valido"
  };
}
