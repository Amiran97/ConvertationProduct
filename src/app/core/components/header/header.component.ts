import { Component, OnInit } from '@angular/core';
import { ExchangeFacadeService } from '../../../modules/exchange/services/exchange-facade.service';
import { Exchange } from '../../../modules/exchange/models/exchage';
import { Subscription } from 'rxjs';  
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private subscription: Subscription;
  data: Exchange[] = [];

  constructor(private exchangeFacadeService: ExchangeFacadeService) {
    this.subscription = this.exchangeFacadeService.exchanges$.subscribe(result => this.data = _.clone(result));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
