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

  techCompetences = [
    { label: 'Angular', icon: 'web', route: '/competences/angular', level: 'Confirmé' },
    { label: 'Java / SpringBoot', icon: 'code', route: '/competences/java-springboot', level: 'Confirmé' },
    { label: 'API', icon: 'api', route: '/competences/api', level: 'Confirmé' },
    { label: 'Docker', icon: 'storage', route: '/competences/docker', level: 'Avancé' },
    { label: 'React', icon: 'widgets', route: '/competences/react', level: 'Intermédiaire' },
    { label: 'Jenkins CI/CD', icon: 'autorenew', route: '/competences/jenkins', level: 'Avancé' },
  ];

  humanCompetences = [
    { label: 'Collaboration', icon: 'group', route: '/competences/collaboration', level: 'Confirmé' },
    { label: 'Communication écrite', icon: 'description', route: '/competences/communication', level: 'Confirmé' },
    { label: 'Esprit critique', icon: 'psychology', route: '/competences/critique', level: 'Confirmé' },
    { label: 'Jugement et prise de décision', icon: 'balance', route: '/competences/jugement', level: 'Confirmé' },
  ];

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
