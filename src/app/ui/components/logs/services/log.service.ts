import { Injectable } from '@angular/core';
import { PaginationResultModel } from 'src/app/common/models/pagination-result.model';
import { ResponseModel } from 'src/app/common/models/response.model';
import { GenericHttpService } from 'src/app/common/services/generic-http.service';
import { LoginResponseService } from 'src/app/common/services/login-response.service';
import { UcafModel } from '../../ucafs/models/ucaf.model';
import { LogRequestModel } from '../models/log-request.model';
import { LogModel } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private _http:GenericHttpService,
    private _login:LoginResponseService

  ) { }

  getAllByTableName(model:LogRequestModel,callBack:(res:ResponseModel< PaginationResultModel<LogModel[]>>)=>void){
    model.companyId = this._login.getLoginResponseModel().company.companyId;
    this._http.post<ResponseModel< PaginationResultModel<LogModel[]>>>("Logs/GetLogsByTableName",model,res=>{
      callBack(res)
    });
  }
}
