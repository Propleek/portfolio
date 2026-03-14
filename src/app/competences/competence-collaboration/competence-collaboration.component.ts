import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-collaboration',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-collaboration.component.html',
  styleUrl: './competence-collaboration.component.scss',
})
export class CompetenceCollaborationComponent {}
