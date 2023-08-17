import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, concatMap, of, catchError, map, switchMap } from 'rxjs';
import { IApp } from 'src/app/state/app.interface';
import * as fromPostsActions from '../state/posts.actions';
import { PostsService } from '../services/posts.service';

@Injectable()
export class PostEffects {
  constructor(
    private store: Store<IApp>,
    private actions$: Actions,
    private postService: PostsService
  ) {}

  getAllPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPostsActions.getAllPosts),
      switchMap(_ =>
        this.postService.getAllPosts(1, 15).pipe(
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
