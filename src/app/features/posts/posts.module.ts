import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailedPostComponent } from './components/detailed-post/detailed-post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostsComponent, PostListItemComponent, DetailedPostComponent],
  imports: [CommonModule, SharedModule, InfiniteScrollModule, RouterModule],
  exports: [PostsComponent, PostListItemComponent],
})
export class PostsModule {}
