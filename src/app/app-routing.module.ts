import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full'},
  // lazy loading component when the path is visited
  {
    path: 'recipe',
    loadChildren: () => import('./recipes/recipes.module')
      .then(m => m.RecipesModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module')
      .then(s => s.ShoppingListModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(a => a.AuthModule)
  }
];

@NgModule({
  // pre load for subsequence load and initial load
  imports: [
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
