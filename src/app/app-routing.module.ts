import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inici',
    pathMatch: 'full'
  },
  
  {
    path: 'inici',
    loadChildren: () => import('./inici/inici.module').then( m => m.IniciPageModule)
  },
 
  {
    path: 'total',
    loadChildren: () => import('./total/total.module').then( m => m.TotalPageModule)
  },
  {
    path: 'vacunes',
    loadChildren: () => import('./vacunes/vacunes.module').then( m => m.VacunesPageModule)
  },
  {
    path: 'vacunam',
    loadChildren: () => import('./vacunam/vacunam.module').then( m => m.VacunamPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
