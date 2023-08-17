import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IApp } from 'src/app/state/app.interface';

@Injectable()
export class PostEffects {
  constructor(private store: Store<IApp>) {}
}
