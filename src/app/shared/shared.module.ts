import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '../shared/wrapper/wrapper.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WrapperComponent, LoaderComponent, SearchComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [WrapperComponent, LoaderComponent, SearchComponent],
})
export class SharedModule {}
