import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router :Router,
    private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const{email, password} =  f.form.value;
    this.auth.signIn(email, password)
    .then((res)=>{
      this.router.navigateByUrl('/');
      this.toaster.success("signUp Success");
    })
    .catch((err)=>{
      console.log(err.message);
      this.toaster.error("signUp failed");
    })
  }

}
