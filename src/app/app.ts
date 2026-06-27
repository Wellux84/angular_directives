import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextColor } from './text-color';
import { FontSize } from './font-size';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextColor, FontSize],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_directives');
  color = 'yellow'
  fontSize = '20px';
}
