import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppleComponent, NavComponent, AssusComponent, HpComponent, AccerComponent, LenovoComponent, SamsungComponent, 
    DellComponent, CannonComponent, TpLinkComponent, LogitachComponent],     
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rozetka';
}
