import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-realisation-stubs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './realisation-stubs.component.html',
  styleUrl: './realisation-stubs.component.scss',
})
export class RealisationStubsComponent {}
