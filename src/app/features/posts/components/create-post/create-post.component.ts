import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromPostActions from '../../state/posts.actions'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'body': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.store.dispatch(fromPostActions.createPostById(this.postForm.value));
  }
}
