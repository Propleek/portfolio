import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-react',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-react.component.html',
  styleUrl: './competence-react.component.scss',
})
export class CompetenceReactComponent {}
