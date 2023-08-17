import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IApp } from './app.interface';
import { PostsReducer } from '../features/posts/state/posts.reducer';

export const reducers: ActionReducerMap<IApp> = {
  posts: PostsReducer,
};
export const metaReducers: MetaReducer<IApp>[] = [];
