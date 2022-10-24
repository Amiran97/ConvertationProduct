import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exchange } from 'src/app/modules/exchange/models/exchage';

@Component({
  selector: 'app-exchange-item',
  templateUrl: './exchange-item.component.pug',
  styleUrls: ['./exchange-item.component.scss']
})
export class ExchangeItemComponent implements OnInit {
  selectedCurrency: string = 'UAH'; 
  @Input() selectedAmount: number = 0;
  @Input() exchanges: Exchange[] = [];
  @Output() onChangeAmount = new EventEmitter<number>();
  @Output() onChangeCurrency = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.changeCurrency();
    this.changeAmount(this.selectedAmount);
  }

  changeCurrency(): void {
    this.onChangeCurrency.emit(this.selectedCurrency);
  }

  changeAmount(amount: any): void {
    this.onChangeAmount.emit(amount);
  }
}