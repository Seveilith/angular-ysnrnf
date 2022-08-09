import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { Subject } from 'rxjs';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements AfterContentInit {
  tabChanged$ = new Subject<TabComponent | null>();

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() {
    console.log(this.tabs);
  }

  ngAfterContentInit() {
    console.log(this.tabs);
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
    this.tabChanged$.next(tab);
  }
}
