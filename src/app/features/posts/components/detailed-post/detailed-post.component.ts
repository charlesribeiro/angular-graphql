import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IApp } from '../../../../state/app.interface';
import * as fromPostsActions from '../../state/posts.actions';
import * as fromPostsSelectors from '../../state/posts.selectors';
import { DetailedPost } from 'src/app/models/posts.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.scss'],
})
export class DetailedPostComponent implements OnInit {
  id: number;
  detailedPost: DetailedPost;
  loading: boolean;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store<IApp>
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
  }

  ngOnInit(): void {
    this.store.dispatch(fromPostsActions.getPostById({ id: this.id }));

    this.store
      .select(fromPostsSelectors.selectDetailedPost)
      .pipe(untilDestroyed(this))
      .subscribe(detailedPost => {
        this.detailedPost = detailedPost;
      });

    this.store
      .select(fromPostsSelectors.selectAllPostsLoading)
      .pipe(untilDestroyed(this))
      .subscribe(loading => {
        this.loading = loading;
      });

    this.store
      .select(fromPostsSelectors.selectAllPostsError)
      .pipe(untilDestroyed(this))
      .subscribe(error => {
        this.error = error;
      });
  }
}
