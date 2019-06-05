import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service';
import { LANG } from 'src/theme/pt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public lang = LANG;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginSocial = async () => {
    const  user = await this.auth.loginSocial()
    console.log(user)
  }
  async logout() {
    const res = this.auth.logoutSocial();
    console.log(res)
  }

}
