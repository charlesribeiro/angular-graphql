import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { initialAppState as initialState } from '../../state/posts.reducer';
import { IApp } from 'src/app/state/app.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  let store: MockStore<IApp>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports: [InfiniteScrollModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(PostsComponent);

    store = TestBed.inject(MockStore);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
