import { Injectable } from '@angular/core';
import { LoginResponseModel } from 'src/app/ui/components/auth/models/login-response.model';
import { CryptoService } from './crypto.service';


@Injectable({
  providedIn: 'root'
})
export class LoginResponseService {

  loginResponse: LoginResponseModel = new LoginResponseModel();
  constructor(
    private _crypto:CryptoService,
    
  ){
   
  }


  getLoginResponseModel(){
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null) {
      let loginResponseString = this._crypto.decrypto(accessToken.toString());
      this.loginResponse = JSON.parse(loginResponseString)
    }
    return this.loginResponse;
  }
}
