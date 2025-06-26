import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    title: 'GameHub',
    loadComponent: () =>
      import('./pages/storefront/storefront.component').then((m) => m.Storefront),
  },
  {
    path: 'library',
    loadComponent: () =>
      import('./pages/library/library.component').then(
        (m) => m.Library,
      ),
  },
    {
    path: 'store',
    loadComponent: () =>
      import('./pages/store/store.component').then(
        (m) => m.StoreComponent,
      ),
  },
    {
    path: 'user',
    loadComponent: () =>
      import('./pages/user/user').then(
        (m) => m.User,
      ),
  },
]
