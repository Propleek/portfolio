import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-angular',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-angular.component.html',
  styleUrl: './competence-angular.component.scss',
})
export class CompetenceAngularComponent {}
