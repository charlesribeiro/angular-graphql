import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IApp } from 'src/app/state/app.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { initialAppState as initialState } from '../../state/posts.reducer';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;
  let store: MockStore<IApp>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(CreatePostComponent);
    store = TestBed.inject(MockStore);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
