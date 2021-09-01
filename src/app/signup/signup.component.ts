import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data: any;
  isSubmitted = false;
  baseURI = ''
  router: any;
  constructor(
    private http: HttpClient,
  ) {
    this.data = {
      name: '',
      email: '',
      password:''
    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.data = {
      name: '',
      email: '',
      password:''
    }
  }
  
  onSubmit(form: NgForm) {
  this.isSubmitted = true;
  this.sending();
  this.resetForm(form);
  }
  sending(){
    const file=JSON.stringify(
      {
      name: this.data.name,
      email: this.data.email,
      password: this.data.password
      
       
     }
    );
    
    console.log(file);
    this.http.post(this.baseURI,file)
    .subscribe(data1 => {
     console.log(data1);
    
    },
    err => {
    console.log('ERROR!: ', err);
  });}
 
  }