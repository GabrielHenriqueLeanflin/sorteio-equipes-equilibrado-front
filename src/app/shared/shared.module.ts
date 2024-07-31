import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    RouterLink,
    CommonModule
  ]
})
export class SharedModule { }
