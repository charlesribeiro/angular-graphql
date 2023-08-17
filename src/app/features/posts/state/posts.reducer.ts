import { Action, createReducer } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
import { postsInitialState } from 'src/app/utils/store-utils';

export const userFeatureKey = 'Posts';

export const initialAppState: Posts = {
  ...postsInitialState,
};

export const reducer = createReducer(initialAppState as Posts);

export function PostsReducer(state: Posts | undefined, action: Action): Posts {
  return reducer(state as Posts, action as Action);
}
