import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-docker',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-docker.component.html',
  styleUrl: './competence-docker.component.scss',
})
export class CompetenceDockerComponent {}
