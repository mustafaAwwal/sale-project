import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(7)]]
    })
  }
  login(data) {
    this.router.navigate(['/','admin','dashboard','home'])
  }
}
