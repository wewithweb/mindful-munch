import { ContentPrivateComponent } from './components/content-private/content-private.component';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavGeneralComponent } from './components/nav-general/nav-general.component';
import { NavPrivateComponent } from './components/nav-private/nav-private.component';
import { ContentGeneralComponent } from './components/content-general/content-general.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavGeneralComponent, NavPrivateComponent, ContentGeneralComponent,ContentPrivateComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn:boolean = false

  

  
}
