import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeMenuComponent } from './components/exchange-menu/exchange-menu.component';
import { ExchangeItemComponent } from './components/exchange-item/exchange-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ExchangeMenuComponent, ExchangeItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CoreModule
  ],
  exports: [ExchangeMenuComponent]
})
export class ExchangeModule { }