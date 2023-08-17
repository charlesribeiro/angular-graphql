import { Action, createReducer, on } from '@ngrx/store';
import { Posts } from '../../../models/posts.model';
import { postsInitialState } from '../../../utils/store-utils';
import {
  getAllPosts,
  getAllPostsFailure,
  getAllPostsMore,
  getAllPostsSuccess,
  getSearchedPosts,
  getSearchedPostsFailure,
  getSearchedPostsSuccess,
} from './posts.actions';

export const userFeatureKey = 'posts';

export const initialAppState: Posts = {
  ...postsInitialState,
};

export const reducer = createReducer(
  initialAppState as Posts,
  on(getAllPosts, state => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(getAllPostsMore, state => ({
    ...state,
    loading: true,
    error: false,
    page: state.page + 1,
  })),
  on(getAllPostsSuccess, (state, { posts }) => ({
    ...state,
    entities: [...state.entities, ...posts],
    loading: false,
    error: false,
  })),
  on(getAllPostsFailure, state => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(getSearchedPosts, state => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(getSearchedPostsSuccess, (state, { posts }) => ({
    ...state,
    entities: posts,
    loading: false,
    error: false,
  })),
  on(getSearchedPostsFailure, state => ({
    ...state,
    loading: false,
    error: true,
  }))
);

export function PostsReducer(state: Posts | undefined, action: Action): Posts {
  return reducer(state as Posts, action as Action);
}
