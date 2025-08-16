import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'hafssa';
  email = 'hafssa@33.com';

  showGreeting = false;

  updateName(newName: string) {
    this.name = newName;
  }
}
