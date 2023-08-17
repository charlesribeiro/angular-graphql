import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '../shared/wrapper/wrapper.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [WrapperComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [WrapperComponent, LoaderComponent],
})
export class SharedModule {}
