import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPostComponent } from './features/posts/components/detailed-post/detailed-post.component';
import { PostsComponent } from './features/posts/components/posts/posts.component';

const routes: Routes = [
  { path: 'post/:id', component: DetailedPostComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
