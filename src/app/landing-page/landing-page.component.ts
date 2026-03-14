import { Component, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);

  public scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }
}
