import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-critique',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-critique.component.html',
  styleUrl: './competence-critique.component.scss',
})
export class CompetenceCritiqueComponent {}
