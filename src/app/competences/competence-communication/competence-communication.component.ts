import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-communication',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-communication.component.html',
  styleUrl: './competence-communication.component.scss',
})
export class CompetenceCommunicationComponent {}
