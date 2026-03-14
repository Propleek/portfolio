import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-realisation-spinnin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './realisation-spinnin.component.html',
  styleUrl: './realisation-spinnin.component.scss',
})
export class RealisationSpinninComponent {}
