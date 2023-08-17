import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { GET_POSTS } from 'src/app/graphql.operations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private apollo: Apollo) {
    this.apollo.watchQuery({ query: GET_POSTS })

  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_POSTS
    }).valueChanges.subscribe(({ data, error }: any) => {
      debugger;

    }
    );
  }

}
