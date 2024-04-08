import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainNavbarComponent} from "./main-navbar/main-navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'juxtopposed-steam-redesign';
}
