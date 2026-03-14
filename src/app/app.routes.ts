import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  
  // Realisations
  { path: 'realisations/refonte', loadComponent: () => import('./realisations/realisation-refonte/realisation-refonte.component').then(m => m.RealisationRefonteComponent) },
  { path: 'realisations/neoherba', loadComponent: () => import('./realisations/realisation-neoherba/realisation-neoherba.component').then(m => m.RealisationNeoherbaComponent) },
  { path: 'realisations/activ-infinite', loadComponent: () => import('./realisations/realisation-activ-infinite/realisation-activ-infinite.component').then(m => m.RealisationActivInfiniteComponent) },
  { path: 'realisations/stubs', loadComponent: () => import('./realisations/realisation-stubs/realisation-stubs.component').then(m => m.RealisationStubsComponent) },
  { path: 'realisations/spinnin', loadComponent: () => import('./realisations/realisation-spinnin/realisation-spinnin.component').then(m => m.RealisationSpinninComponent) },

  // Competences
  { path: 'competences/angular', loadComponent: () => import('./competences/competence-angular/competence-angular.component').then(m => m.CompetenceAngularComponent) },
  { path: 'competences/java-springboot', loadComponent: () => import('./competences/competence-java/competence-java.component').then(m => m.CompetenceJavaComponent) },
  { path: 'competences/docker', loadComponent: () => import('./competences/competence-docker/competence-docker.component').then(m => m.CompetenceDockerComponent) },
  { path: 'competences/jenkins', loadComponent: () => import('./competences/competence-jenkins/competence-jenkins.component').then(m => m.CompetenceJenkinsComponent) },
  { path: 'competences/api', loadComponent: () => import('./competences/competence-api/competence-api.component').then(m => m.CompetenceApiComponent) },
  { path: 'competences/react', loadComponent: () => import('./competences/competence-react/competence-react.component').then(m => m.CompetenceReactComponent) },
  { path: 'competences/jugement', loadComponent: () => import('./competences/competence-jugement/competence-jugement.component').then(m => m.CompetenceJugementComponent) },
  { path: 'competences/collaboration', loadComponent: () => import('./competences/competence-collaboration/competence-collaboration.component').then(m => m.CompetenceCollaborationComponent) },
  { path: 'competences/critique', loadComponent: () => import('./competences/competence-critique/competence-critique.component').then(m => m.CompetenceCritiqueComponent) },
  { path: 'competences/communication', loadComponent: () => import('./competences/competence-communication/competence-communication.component').then(m => m.CompetenceCommunicationComponent) },

  { path: '**', redirectTo: '' }
];
