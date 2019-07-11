import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { AuthService } from '../../../core/auth/auth.service';
import { User } from '../../../shared/models/user';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public lang = LANG;
  private user = {
    confirmPassword: "123456",
    displayName: "Alan Luiz",
    email: "alan@alan",
    password: "123456",
    phoneNumber: "21964780203",
    photoUrl: "",
    team: "Botafogo"
  };
  constructor(private auth: AuthService, private modalService: ModalService, private router: Router) { }

  toggleModal(){
    this.modalService.toggleModal()
  }

  goTo(route){
    this.modalService.goTo(route);
  }

  ngOnInit() {
  }

  onChange(event, atr){
    const val = event.target.value
    this.user[atr] = val
  }

  async signup(){
    const res = await this.auth.signup(this.user)
    console.log("response signup - ", res)
    this.router.navigate(['/home'])
  }

}
