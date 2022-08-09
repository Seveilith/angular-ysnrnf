import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabContentDirective } from '../tab-content.directive';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  @Input() title: string;
  @Input() active: boolean;

  contentTpl: TabContentDirective | null;

  @ContentChildren(TabContentDirective, { descendants: false })
  contentTpls: QueryList<TabContentDirective>;

  constructor() {}

  ngAfterContentChecked() {
    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
    // only @ContentChildren allows us to specify the {descendants: false} option.
    // Without {descendants: false} we are hitting bugs described in:
    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
    this.contentTpl = this.contentTpls.first;
  }

  ngOnInit() {}
}
