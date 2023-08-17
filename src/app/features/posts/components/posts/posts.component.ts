import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IApp } from '../../../../state/app.interface';

import * as fromPostsActions from '../../state/posts.actions';
import * as fromPostsSelectors from '../../state/posts.selectors';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PostData } from '../../../../models/posts.model';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  allPosts: PostData[] = [];
  loading = false;
  error = false;

  constructor(
    private store: Store<IApp>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fromPostsActions.getAllPosts());

    this.store
      .select(fromPostsSelectors.selectAllPosts)
      .pipe(untilDestroyed(this))
      .subscribe(allPosts => (this.allPosts = allPosts));

    this.store
      .select(fromPostsSelectors.selectAllPostsLoading)
      .pipe(untilDestroyed(this))
      .subscribe(loading => (this.loading = loading));

    this.store
      .select(fromPostsSelectors.selectAllPostsError)
      .pipe(untilDestroyed(this))
      .subscribe(error => (this.error = error));
  }

  search(search: string): void {
    this.store.dispatch(fromPostsActions.getSearchedPosts({ search }));
  }

  clickedOnPost(id: string): void {
    this.router.navigate(['/post', id]);
  }

  onScrolled(): void {
    this.store.dispatch(fromPostsActions.getAllPostsMore());
    return;
  }
}
