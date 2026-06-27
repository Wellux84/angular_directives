import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextColor } from './text-color';
import { FontSize } from './font-size';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextColor, FontSize, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_directives');
  color = 'yellow'
  fontSize = '20px';
  show = false;
  toggle() {
    this.show = !this.show;
  }
  items: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];

}
