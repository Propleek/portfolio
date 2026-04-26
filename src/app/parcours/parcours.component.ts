import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Experience {
  id: number;
  type: 'entreprise' | 'formation' | 'certification';
  period: string;
  title: string;
  locationName: string;
  locationLogo: string;
  locationUrl?: string;
  responsibility?: string;
  status?: string;
  details?: string;
  realisationsLinks?: { label: string, url: string }[];
  competencesLinks?: { label: string, url: string }[];
  description?: string;
}

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent {
  experiences: Experience[] = [
    {
      id: 1,
      type: 'entreprise',
      period: 'Septembre 2023 - Aujourd\'hui',
      title: 'Développeur Fullstack en alternance',
      locationName: 'Cegedim Assurances',
      locationLogo: 'https://www.cegedim-assurances.com/Style%20Library/cis/img/Cegedim%20Insurance%20Solutions%20-%20555x230.png?csf=1&e=VrrMcC', 
      responsibility: 'Développeur',
      status: 'Alternant',
      details: "Maintenance applicative sur les produits historiques de l'entreprise. Travail sur des problématiques applicatives transverses liées à l'architecture, à la sécurité et aux bonnes pratiques",
      realisationsLinks: [
        { label: 'Refonte outils internes', url: '/realisations/refonte' },
        { label: 'Activ-Infinite', url: '/realisations/activ-infinite' },
        { label: 'Automatisation Stubs Infinite', url: '/realisations/stubs' }
      ],
      competencesLinks: [
        { label: 'Angular', url: '/competences/angular' },
        { label: 'Java/Springboot', url: '/competences/java-springboot' }
      ]
    },
    {
      id: 2,
      type: 'formation',
      period: 'Septembre 2024 - Juillet/Aout 2026',
      title: 'Expert en Ingénierie du Logiciel - RNCP Niveau 7',
      locationName: 'ESIEA',
      locationLogo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/73/Logo_ESIEA_2020.png/960px-Logo_ESIEA_2020.png?_=20210612193640', 
      locationUrl: 'https://www.esiea.fr',
      description: 'Filière Experts, en alternance avec une formation entièrement en distanciel'
    },
    {
      id: 3,
      type: 'formation',
      period: 'Septembre 2021 - Juin 2023',
      title: "Concepteur Développeur d'Apllications - RNCP Niveau 6",
      locationName: 'ESIEA',
      locationLogo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/73/Logo_ESIEA_2020.png/960px-Logo_ESIEA_2020.png?_=20210612193640', 
      locationUrl: 'https://www.esiea.fr',
      description: "Première étape du parcours expert à l'ESIEA, dont j'ai effectué les premières années sous l'enseigne Intech. La formation est basée sur la pédagogie par projets avec en plus une troisième année en alternance pour se professionaliser"
    }
  ];
}
