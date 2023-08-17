import { createAction, props } from '@ngrx/store';
import { PostData } from 'src/app/models/posts.model';

export const getAllPosts = createAction('[Posts] get all posts');

export const getAllPostsMore = createAction('[Posts] get more all posts');

export const getAllPostsSuccess = createAction(
  '[Posts API] get all posts success',
  props<{ posts: PostData[]; totalCount: number }>()
);

export const getAllPostsFinish = createAction(
  '[Posts API] get all posts finish'
);

export const getAllPostsFailure = createAction(
  '[Posts API] get all posts failure',
  props<{ message: string }>()
);

export const getPostById = createAction(
  '[Posts] get post by id',
  props<{ id: number }>()
);

export const getPostByIdSuccess = createAction(
  '[Posts API] get post by id success',
  props<{ post: any }>()
);

export const getPostByIdFailure = createAction(
  '[Posts API] get post by id failure',
  props<{ message: string }>()
);

export const getSearchedPosts = createAction(
  '[Posts] get searched posts',
  props<{ search: string }>()
);

export const getSearchedPostsMore = createAction(
  '[Posts] get searched posts more',
  props<{ search: string }>()
);

export const getSearchedPostsSuccess = createAction(
  '[Posts API] get searched posts success',
  props<{ posts: PostData[]; totalCount: number }>()
);

export const getSearchedPostsFailure = createAction(
  '[Posts API] get searched posts failure',
  props<{ message: string }>()
);
