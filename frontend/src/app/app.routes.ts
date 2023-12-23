import { Routes } from '@angular/router';
import { FinishedComponent } from './finished/finished.component';
import { UnfinishedComponent } from './unfinished/unfinished.component';

export const routes: Routes = [

    {path:'', redirectTo:'unfinished', pathMatch:'full'},
    {path: 'finished', component: FinishedComponent},
    {path: 'unfinished', component: UnfinishedComponent}
];
