import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_ALL_POSTS, GET_POSTS, GET_SINGLE_POST } from '../../../graphql.operations';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private apollo: Apollo) {}

  getPosts(): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_POSTS,
    }).valueChanges;
  }

  getAllPosts(): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_ALL_POSTS,
      variables: {
        "options": {
          "paginate": {
            "page": 2,
            "limit": 5
          }
        }
      }
    }).valueChanges;
  }

  getSinglePost(id:number): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_SINGLE_POST,
      variables: {
        "id": id,
        "options": {
          "paginate": {
            "page": 2,
            "limit": 5
          }
        }
      }
    }).valueChanges;
  }
}
