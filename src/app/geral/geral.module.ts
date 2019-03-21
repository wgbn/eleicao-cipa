import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CardComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
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
