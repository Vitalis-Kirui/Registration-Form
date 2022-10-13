import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';

  constructor(private service : FormBuilder){};

  // form model using form builder service
  registrationForm = this.service.group({
    userName : [''],
    email : [''],
    subscribe : [false],
    password : [''],
    confirmPassword : [''],
    address : this.service.group({
      state : [''],
      city : [''],
      postalCode : [''],
    })

  });

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
      }
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

}
