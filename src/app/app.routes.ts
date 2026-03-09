import { Routes } from '@angular/router';
import { HeaderModule } from '../header-routing/header.module';

export const routes: Routes = [
    {
        path:"",
        loadChildren:() => import('../header-routing/header.module').then(m => m.HeaderModule)
    }
];
