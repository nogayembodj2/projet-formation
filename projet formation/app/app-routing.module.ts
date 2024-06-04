import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cours',
    loadChildren: () => import('./cours/cours.module').then( m => m.CoursPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'certification',
    loadChildren: () => import('./certification/certification.module').then( m => m.CertificationPageModule)
  },
  {
    path: 'dev-web',
    loadChildren: () => import('./dev-web/dev-web.module').then( m => m.DevWebPageModule)
  },
  {
    path: 'bureau',
    loadChildren: () => import('./bureau/bureau.module').then( m => m.BureauPageModule)
  },
  {
    path: 'infographe',
    loadChildren: () => import('./infographe/infographe.module').then( m => m.InfographePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
