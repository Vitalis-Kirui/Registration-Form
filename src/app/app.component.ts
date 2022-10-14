import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenWordsValidator, restrictedTermsValidator } from './validators/forbiddenWords';
import { passwordMatchValidator } from './validators/password-match';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'Registration';

  registrationForm! : FormGroup;

  // Get username function
  get userName(){
    return this.registrationForm.get('userName');
  };

  // Get email function
  get email(){
    return this.registrationForm.get('email');
  };

  // Get password function
  get password(){
    return this.registrationForm.get('password');
  };

  // Get alternativeEmail function
  get alternativeEmails(){
    return this.registrationForm.get('alternativeEmail') as FormArray;
  };

  // Pushing alternative emails function
  addAlternativeEmail(){
    this.alternativeEmails.push(this.service.control(''));
  };

  constructor(private service : FormBuilder){};

  ngOnInit() {
    
    // form model using form builder service
  this.registrationForm = this.service.group({
    userName : ['', [Validators.required, Validators.minLength(3), forbiddenWordsValidator(/admin/), forbiddenWordsValidator(/porn/), restrictedTermsValidator(/password/)]],
    email : ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    subscribe : [false],
    password : ['', [Validators.minLength(5)],],
    confirmPassword : [''],
    address : this.service.group({
      state : [''],
      city : [''],
      postalCode : [''],
    }),
    alternativeEmail : this.service.array([])
  }, 
  {validator : passwordMatchValidator}
  );

    // Conditional validation for checkbox and email

    this.registrationForm.get('subscribe')?.valueChanges
    .subscribe(checkedValue =>{
      const email = this.registrationForm.get('email');

      if(checkedValue){
        email?.setValidators([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
      }
      else{
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    })

}

  // Form model using form group and form control

  // registrationForm = new FormGroup({ 
  //   userName : new FormControl(''),
  //   email : new FormControl(''),
  //   subscribe : new FormControl(''),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({ 
  //     state : new FormControl(''),
  //     city : new FormControl(''),
  //     postalCode : new FormControl(''),
  //   }),
  // });

  // Set value function
  setValue(){
    this.registrationForm.setValue({
      userName: 'Vitalis',
      email : 'vitalis@gmail.com',
      subscribe : true,
      password : 'qwerty',
      confirmPassword :'qwerty',
      address : {
        state : 'Kenya',
        city : 'Nairobi',
        postalCode : '123',
      },
      alternativeEmail : ''
    });
  };

  // Patch value function
  patchValue(){
    this.registrationForm.patchValue({
      userName: 'Vitalis',
      email : 'vitalis@gmail.com',
      subscribe : true,
      password : 'qwerty',
      confirmPassword :'qwerty',
    });
  };

  // Submit function
  onSubmit(){
    console.log(this.registrationForm.value)
  }

}
