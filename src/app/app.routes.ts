import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// Arquivo de rotas
export const routes: Routes = [
  {
    //caminho para redirecionar para o componente, neste caso HomeComponent
    path: 'home',
    component: HomeComponent, // é importado o Homecomponent from './home/home.component';
  },
  {
    path: '**', // geralmente se usa para ir para uma pagina not-found
    redirectTo: 'home',
  },
];
