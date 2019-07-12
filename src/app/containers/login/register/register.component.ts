import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { AuthService } from '../../../core/auth/auth.service';
import { User } from '../../../shared/models/user';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public lang = LANG;
  private user: FormGroup
  constructor(private fb:FormBuilder  , private auth: AuthService, private modalService: ModalService, private router: Router) { }

  toggleModal(){
    this.modalService.toggleModal()
  }

  goTo(route){
    this.modalService.goTo(route);
  }

  ngOnInit() {
    this.user = this.fb.group({
      "email": ["", Validators.required],
      "team": [""],
      "displayName": [""],
      "phoneNumber": [""],
      "password": [""],
      "confirmPassword": [""]
    })
  }

  async signup(){
    const res = await this.auth.signup(this.user)
    console.log("response signup - ", res)
    this.router.navigate(['/home'])
  }

}
