import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { ViewportScroller, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolioweb';
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);

  public scrollTo(elementId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(elementId);
        }, 100);
      });
    } else {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }
}
