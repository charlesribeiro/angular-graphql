import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { PostsService } from './posts.service';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { GET_POSTS } from '../../../graphql.operations';

describe('PostsService', () => {
  const mockApollo = {
    watchQuery: jest.fn(() => ({
      valueChanges: of({ data: 'someData' }),
    })),
  };

  let service: PostsService;
  let apollo: Apollo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostsService,
        ApolloTestingModule,
        { provide: Apollo, useValue: mockApollo },
      ],
    });

    service = TestBed.inject(PostsService);
    apollo = TestBed.inject(Apollo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPosts', () => {
    it('should execute a query', () => {
      service.getPosts().subscribe(response => {
        expect(response.data).toBe('someData');
      });

      expect(apollo.watchQuery).toHaveBeenCalledWith({ query: GET_POSTS });
    });
  });
});
