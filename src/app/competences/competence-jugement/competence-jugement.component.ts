import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-jugement',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-jugement.component.html',
  styleUrl: './competence-jugement.component.scss',
})
export class CompetenceJugementComponent {}
