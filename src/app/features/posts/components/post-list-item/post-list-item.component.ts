import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostData } from 'src/app/models/posts.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent {
  @Input() post : PostData
}
