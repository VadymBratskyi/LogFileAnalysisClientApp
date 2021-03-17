import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardHomeComponent } from './card/card-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent,
    CardHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    /**material */
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
