import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-realisation-activ-infinite',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './realisation-activ-infinite.component.html',
  styleUrl: './realisation-activ-infinite.component.scss',
})
export class RealisationActivInfiniteComponent {}
