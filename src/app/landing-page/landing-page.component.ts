import { Component, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { ParcoursComponent } from '../parcours/parcours.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ParcoursComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);

  emailRevealed = false;

  public scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

  public toggleEmail(): void {
    this.emailRevealed = !this.emailRevealed;
  }
}
