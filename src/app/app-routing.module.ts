import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'papers', loadChildren: './papers/papers.module#PapersPageModule' },
  { path: 'colloquium', loadChildren: './colloquium/colloquium.module#ColloquiumPageModule' },
  { path: 'competition', loadChildren: './competition/competition.module#CompetitionPageModule' },
  { path: 'posters', loadChildren: './posters/posters.module#PostersPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
