import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import {
  mergeMap,
  concatMap,
  of,
  catchError,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { IApp } from 'src/app/state/app.interface';
import * as fromPostsActions from '../state/posts.actions';
import { PostsService } from '../services/posts.service';
import * as fromPostSelectors from '../state/posts.selectors';

@Injectable()
export class PostEffects {
  constructor(
    private store: Store<IApp>,
    private actions$: Actions,
    private postService: PostsService
  ) {}

  getAllPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPostsActions.getAllPosts, fromPostsActions.getAllPostsMore),
      withLatestFrom(
        this.store.pipe(select(fromPostSelectors.selectAllPostsPage))
      ),
      switchMap(([, page]) =>
        this.postService.getAllPosts(page, 15).pipe(
          map(apolloResult => {
            debugger;
            return fromPostsActions.getAllPostsSuccess({
              posts: apolloResult.data.posts.data,
            });
          }),
          catchError(({ message }) =>
            of(fromPostsActions.getAllPostsFailure({ message }))
          )
        )
      )
    )
  );

  getSearchedPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPostsActions.getSearchedPosts),
      switchMap(({ search }) =>
        this.postService.searchPostsByTitle(search, 1, 15).pipe(
          map(apolloResult => {
            return fromPostsActions.getAllPostsSuccess({
              posts: apolloResult.data.posts.data,
            });
          }),
          catchError(({ message }) =>
            of(fromPostsActions.getAllPostsFailure({ message }))
          )
        )
      )
    )
  );
}
