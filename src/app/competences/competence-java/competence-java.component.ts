import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competence-java',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-java.component.html',
  styleUrl: './competence-java.component.scss',
})
export class CompetenceJavaComponent {}
