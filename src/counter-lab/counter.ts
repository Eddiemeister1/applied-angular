import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>Counter Stuff Goes Here</div>
    <div class="flex flex-row gap-4 p-8">
      <a class="link" routerLink="ui">UI</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class Counter {}
