import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-api',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-api.component.html',
  styleUrl: './competence-api.component.scss',
})
export class CompetenceApiComponent {}
