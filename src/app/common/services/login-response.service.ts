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
   let loginResponseString = _crypto.decrypto(localStorage.getItem("accessToken").toString());
   this.loginResponse = JSON.parse(loginResponseString)
  }


  getLoginResponseModel(){
    return this.loginResponse;
  }
}
