import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../models/Response';
import { ILogin } from '../models/Login';
import { environment } from '../../../environment/environment';


@Injectable({providedIn: 'root'})
export class AuthService {
    
    constructor(private httpClient: HttpClient) { }


    public loginUser(newClient: ILogin): Observable<IResponse> {
        console.log(newClient)
        return this.httpClient.post<IResponse>(environment.api.getAuthLogin, newClient);
    }

}