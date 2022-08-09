import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: '[tabOutlet]',
  host: { '[class.tab-content]': 'true' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template ngFor let-item [ngForOf]="tabs.tabs">
      <div *ngIf="item.active">
        <ng-template [ngTemplateOutlet]="item.contentTpl?.templateRef || null"
                     [ngTemplateOutletContext]="{$implicit: item.active}"></ng-template>
      </div>
    </ng-template>
  `,
})
export class TabOutletComponent implements AfterViewInit {
  @Input('tabOutlet') tabs: TabsComponent;

  constructor(private _cd: ChangeDetectorRef, private _ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.tabs.tabChanged$.subscribe((x) => {
      console.log(x);
      this._cd.detectChanges();
    });
  }
}
