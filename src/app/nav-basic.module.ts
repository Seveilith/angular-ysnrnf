import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdNavBasic } from './nav-basic';
import { TabContentDirective } from './tab-content.directive';
import { TabOutletComponent } from './tab-outlet/tab-outlet.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [
    NgbdNavBasic,
    TabsComponent,
    TabComponent,
    TabOutletComponent,
    TabContentDirective,
  ],
  exports: [NgbdNavBasic],
  bootstrap: [NgbdNavBasic],
})
export class NgbdNavBasicModule {}
