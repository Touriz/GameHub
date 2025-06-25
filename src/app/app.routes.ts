import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    title: 'GameHub',
    loadComponent: () =>
      import('./pages/storefront/storefront').then((m) => m.Storefront),
  },
  {
    path: 'library',
    loadComponent: () =>
      import('./pages/library/library').then(
        (m) => m.Library,
      ),
  },
    {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin').then(
        (m) => m.Admin,
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
