import { Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { AssusComponent } from './assus/assus.component';
import { HpComponent } from './hp/hp.component';
import { AccerComponent } from './accer/accer.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { SamsungComponent } from './samsung/samsung.component';
import { DellComponent } from './dell/dell.component';
import { CannonComponent } from './cannon/cannon.component';
import { TpLinkComponent } from './tp-link/tp-link.component';
import { LogitachComponent } from './logitach/logitach.component';

export const routes: Routes = [
    {path: "apple", component: AppleComponent},
    {path: "assus", component: AssusComponent},
    {path: "hp", component: HpComponent},
    {path: "accer", component: AccerComponent},
    {path: "lenovo", component: LenovoComponent},
    {path: "samsung", component: SamsungComponent},
    {path: "dell", component: DellComponent},
    {path: "cannon", component: CannonComponent},
    {path: "tp-link", component: TpLinkComponent},
    {path: "logitach", component: LogitachComponent}    
];
