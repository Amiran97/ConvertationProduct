import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';  
import { Exchange } from 'src/app/modules/exchange/models/exchage';
import { ExchangeFacadeService } from '../../services/exchange-facade.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-exchange-menu',
  templateUrl: './exchange-menu.component.pug',
  styleUrls: ['./exchange-menu.component.scss']
})
export class ExchangeMenuComponent implements OnInit {
  private subscription: Subscription;
  exchanges: Exchange[] = [];
  firstResultAmount: number = 0;
  secondResultAmount: number = 0;
  
  constructor(private exchangeFacadeService: ExchangeFacadeService) {
    this.subscription = this.exchangeFacadeService.exchanges$.subscribe(result => {
      if(result.length > 0) {
        this.exchanges = result;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeCurrencyFirst(currency: string): void {
    this.exchangeFacadeService.firstCurrency = currency;
    this.secondResultAmount = this.exchangeFacadeService.calc(this.exchanges, 'first');
  }

  changeCurrencySecond(currency: string): void {
    this.exchangeFacadeService.secondCurrency = currency;
    this.firstResultAmount = this.exchangeFacadeService.calc(this.exchanges, 'second');
  }

  changeAmountFirst(amount: number): void {
    this.exchangeFacadeService.firstAmount = amount;
    this.secondResultAmount = this.exchangeFacadeService.calc(this.exchanges, 'first');
  }

  changeAmountSecond(amount: number): void {
    this.exchangeFacadeService.secondAmount = amount;
    this.firstResultAmount = this.exchangeFacadeService.calc(this.exchanges, 'second');
  }
}