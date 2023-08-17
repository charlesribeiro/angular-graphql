import { createAction, props } from '@ngrx/store';
import { PostData } from 'src/app/models/posts.model';

export const getAllPosts = createAction('[Posts] get posts');

export const getAllPostsSuccess = createAction(
  '[Posts API] get all posts success',
  props<{ posts: PostData[] }>()
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
  '[Posts API] get post by id failure'
);
