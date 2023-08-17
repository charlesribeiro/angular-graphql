import { Posts } from 'src/app/models/posts.model';
import { userFeatureKey } from './posts.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<Posts>(userFeatureKey);

export const selectAllPosts = createSelector(
  selectFeature,
  (posts: Posts) => posts.entities
);

export const selectAllPostsLoading = createSelector(
  selectFeature,
  (posts: Posts) => posts.loading
);

export const selectAllPostsError = createSelector(
  selectFeature,
  (posts: Posts) => posts.error
);

export const selectAllPostsPage = createSelector(
  selectFeature,
  (posts: Posts) => posts.page
);

export const areAllPostsLoaded = createSelector(
  selectFeature,
  (posts: Posts) => posts.totalCount === posts.entities.length
);
