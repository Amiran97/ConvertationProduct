import { Injectable } from '@angular/core';
import { ExchangeApiService } from './exchange-api.service';
import { ExchangeStorageService } from './exchange-storage.service';
import { map } from 'rxjs/operators';
import { Exchange } from '../models/exchage';
import * as _ from 'lodash';
import { LoadingService } from 'src/app/core/services/loading.service';

@Injectable({
    providedIn: 'root'
  })
export class ExchangeFacadeService {
    constructor(
        private exchangeApi: ExchangeApiService,
        private exchangeStorage: ExchangeStorageService,
        private loadingService: LoadingService) { 
          this.load();
      }
    
      get exchanges$() {
        return this.exchangeStorage.exchanges$;
      }

      set firstCurrency(value: string) {
        this.exchangeStorage.firstCurrency = value;
      }

      set firstAmount(value: number) {
        this.exchangeStorage.firstAmount = value;
      }

      set secondCurrency(value: string) {
        this.exchangeStorage.secondCurrency = value;
      }

      set secondAmount(value: number) {
        this.exchangeStorage.secondAmount = value;
      }

      calc(exchanges: Exchange[], type: string): number {
        let firstExchange = _.find(exchanges, item => item.cc === this.exchangeStorage.firstCurrency);
        let secondExchange = _.find(exchanges, item => item.cc === this.exchangeStorage.secondCurrency);
        if(firstExchange && secondExchange) {
          let result = 0;
          switch(type) {
            case 'first':
              result  = (this.exchangeStorage.firstAmount * firstExchange.rate) / secondExchange.rate;
              this.exchangeStorage.secondAmount = result;
              break;
            case 'second':
              result = (this.exchangeStorage.secondAmount * secondExchange.rate) / firstExchange.rate;
              this.exchangeStorage.firstAmount = result;
              break;
          }
          return result;
        }
        return 0;
      }

      private clear() {
        this.exchangeStorage.set([]);  
      }

      private load() {
        this.exchangeApi.getAll()
          .pipe(map(data => { 
            data.push({rate: 1, r030: 0, cc: 'UAH', exchangedate: 'none', txt: 'Українська гривня'});
            return data;
          }))
          .subscribe(data => this.exchangeStorage.set(data));
      }
}