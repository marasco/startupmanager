import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  styles: [
    require('./app-header.scss')
  ],
  template: `
    <header class="header">
      <div class="g-row">
        <div class="g-col">
          <h1 class="header__title">My Startup</h1>
    
          <ul class="header__links">
            <li *ngIf="authenticated"><a class="header__link" (click)="signOut.emit()" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </header>
  `
})

export class AppHeader {
  @Input() authenticated: boolean;
  @Output() signOut: EventEmitter<any> = new EventEmitter(false);
}
