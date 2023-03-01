import { Injectable } from '@angular/core';

declare const $ : any;
declare const toastr:any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  toastr(type:ToastrType,message: string,title:string){
      switch (type) {
        case ToastrType.Success:
            toastr.success(title,message)
         
          break;

          case ToastrType.Warning:          
            toastr.Warning(title,message)           
            break;

          case ToastrType.Error:         
            toastr.error(title,message)           
            break;

          case ToastrType.Info:
            toastr.info(title,message)         
            break;
         
          
      
        default:
          break;
      }
       

  }
}

export enum ToastrType{
  Success,
  Error,
  Info,
  Warning
}