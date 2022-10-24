import { Pipe, PipeTransform } from '@angular/core';
import { Exchange } from 'src/app/modules/exchange/models/exchage';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';
@Pipe({
    name: 'currencyFilter',
    pure: false
})
export class CurrencyFilterPipe implements PipeTransform {

    transform(items: Exchange[], ignoreCurrencies?: string[]): any {
        let availableСurrencies: string[] = environment.availableСurrencies;
        if (!items) {
            return items;
        }
        if(ignoreCurrencies && ignoreCurrencies.length) {
            availableСurrencies = _.filter(availableСurrencies, item => !_.includes(ignoreCurrencies, item));
        }

        return _.filter(items, item => _.includes(availableСurrencies, item.cc));
    }
}