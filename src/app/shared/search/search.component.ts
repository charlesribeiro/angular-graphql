import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  searchTerm = '';
  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl(null),
    });
  }

  triggerSearch() {
    return this.search.emit(this.searchForm?.get('searchTerm')?.value);
  }
}
