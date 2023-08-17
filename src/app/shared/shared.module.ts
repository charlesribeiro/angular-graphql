import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '../shared/wrapper/wrapper.component';

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [WrapperComponent]
})
export class SharedModule { }
