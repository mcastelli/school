import { Component } from '@angular/core';
import { HtmlInjectService } from './services/service.index';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuEscuela';
  
  constructor (
    private _htmlInject: HtmlInjectService
    ) {
      document.body.appendChild( this._htmlInject.buildMapsScript() );
      // document.body.appendChild( this._htmlInject.buildFirebaseScript() );

      console.log (window.location.host);
    }
    
}
