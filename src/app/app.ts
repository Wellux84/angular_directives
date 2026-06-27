import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextColor } from './text-color';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextColor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_directives');
  color = 'yellow'
}
