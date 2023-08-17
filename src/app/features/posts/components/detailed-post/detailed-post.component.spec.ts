import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPostComponent } from './detailed-post.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IApp } from 'src/app/state/app.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { initialAppState as initialState } from '../../state/posts.reducer';

describe('DetailedPostComponent', () => {
  let store: MockStore<IApp>;
  let activatedRoute: ActivatedRoute;

  let component: DetailedPostComponent;
  let fixture: ComponentFixture<DetailedPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedPostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(DetailedPostComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);

    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
