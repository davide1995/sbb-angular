import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'sbb-field-showcase',
  templateUrl: './field-showcase.component.html',
  styleUrls: ['./field-showcase.component.scss']
})
export class SbbFieldShowcaseComponent implements OnInit {

  inputText1 = '';
  inputText2 = '';
  inputText3 = '';

  disabled: boolean;

  myForm1: FormGroup;
  myForm2: FormGroup;
  myForm3: FormGroup;

  placeholder = 'Please enter your name ...';

  header1 = '1. SBB-Field without Attribute Label';
  header2 = '2. SBB-Field with SBB-Label, Text and Input';
  header3 = '3. SBB-Field with Attribute Label';

  inputType = this.header1;
  types = [
    this.header1,
    this.header2,
    this.header3
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.myForm1 = this.formBuilder.group({
      name1: new FormControl({ disabled: false }, Validators.required)
    });
    this.myForm2 = this.formBuilder.group({
      name2: new FormControl({ disabled: false }, [Validators.required, Validators.minLength(3)])
    });
    this.myForm3 = this.formBuilder.group({
      name3: new FormControl({ disabled: false }, Validators.required)
    });

    this.myForm1.reset();
    this.myForm2.reset();
    this.myForm3.reset();

  }

  disableForms() {
    const control1 = this.myForm1.get('name1');
    control1.disabled ? control1.enable() : control1.disable();

    const control2 = this.myForm2.get('name2');
    control2.disabled ? control2.enable() : control2.disable();

    const control3 = this.myForm3.get('name3');
    control3.disabled ? control3.enable() : control3.disable();
  }

  reset1() {
    this.myForm1.reset();
    this.inputText1 = '';
  }

  reset2() {
    this.myForm2.reset();
    this.inputText2 = '';
  }

  reset3() {
    this.myForm3.reset();
    this.inputText3 = '';
  }

}