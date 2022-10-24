import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exchange } from '../models/exchage';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeApiService {

  private readonly apiUrl: string = environment.exchangeUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Exchange[]>{
    return this.httpClient.get<Exchange[]>(this.apiUrl, { responseType: 'json' })
        
  }
}
