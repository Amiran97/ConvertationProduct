import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Exchange } from '../models/exchage';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
export class ExchangeStorageService {
    private _exchanges: BehaviorSubject<Exchange[]>;
    private _firstCurrency: string = 'UAH';
    private _firstAmount: number = 0;
    private _secondCurrency: string = 'UAH';
    private _secondAmount: number = 0;

  constructor() {
    this._exchanges = new BehaviorSubject(new Array<Exchange>());
  }

  get exchanges$() {
    return this._exchanges.asObservable();
  }

  set(exchanges: Exchange[]) {
    this._exchanges.next(exchanges);
  }

  get firstCurrency(): string {
    return this._firstCurrency;
  }

  set firstCurrency(value: string) {
    if(value) {
      this._firstCurrency = value;
    }
  }

  get firstAmount(): number {
    return this._firstAmount;
  }

  set firstAmount(value: number) {
    if(value) {
      this._firstAmount = value;
    }
  }

  get secondCurrency(): string {
    return this._secondCurrency;
  }

  set secondCurrency(value: string) {
    if(value) {
      this._secondCurrency = value;
    }
  }

  get secondAmount(): number {
    return this._secondAmount;
  }

  set secondAmount(value: number) {
    if(value) {
      this._secondAmount = value;
    }
  }
}