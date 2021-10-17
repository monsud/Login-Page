import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{
  form: FormGroup;
  City: any = ['Napoli', 'Avellino', 'Benevento', 'Caserta', 'Salerno']

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(5)])],
      gender: ['', Validators.required],
      province: ['', Validators.required],
      topics: fb.array([])
    })
  }

  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get cityName() {
    return this.form.get('cityName');
  }

  isFieldValid(field: string) {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

  // hasFieldMinLenght(field: string) {
  //   if (this.form.get(field).errors.minlegnht)
  //   return this.form.get(field).errors;
  // }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}