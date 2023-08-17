import { Posts } from 'src/app/models/posts.model';
import { userFeatureKey } from './posts.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<Posts>(userFeatureKey);

export const selectAllPosts = createSelector(
  selectFeature,
  (posts: Posts) => posts.entities
);
