import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { 
        path: 'films', 
        children: [
          { path: '', loadChildren: '../films/films.module#FilmsPageModule', },
          { path: ':id', loadChildren: '../film-details/film-details.module#FilmDetailsPageModule' }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: '../people/people.module#PeoplePageModule'
          },
          {
            path: ':id',
            loadChildren: () => import('../person-detail/person-detail.module').then(m => m.PersonDetailPageModule)
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: '../planets/planets.module#PlanetsPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TabsPageRouterModule { }
