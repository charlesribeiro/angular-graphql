import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [PostsComponent, PostListItemComponent],
  imports: [CommonModule, SharedModule, InfiniteScrollModule],
  exports: [PostsComponent, PostListItemComponent],
})
export class PostsModule {}
