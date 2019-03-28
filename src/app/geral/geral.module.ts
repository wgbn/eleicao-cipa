import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    CardComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],

  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LayoutComponent,
    CardComponent
  ]
})
export class GeralModule { }
