import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailedPostComponent } from './components/detailed-post/detailed-post.component';
import { RouterModule } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsComponent,
    PostListItemComponent,
    DetailedPostComponent,
    CreatePostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    PostsComponent,
    PostListItemComponent,
    DetailedPostComponent,
    CreatePostComponent,
  ],
})
export class PostsModule {}
