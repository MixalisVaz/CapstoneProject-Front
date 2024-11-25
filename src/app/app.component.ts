import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './pages/homepage/components/homepage/shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homepage';
}
