import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Inici', url: 'inici', icon: 'home' },
    { title: 'Dades Generals', url: 'total', icon: 'globe' },
    { title: 'Vacunació Comarques', url: 'vacunes', icon: 'fitness' },
    { title: 'Vacunació Municipis', url: 'vacunam', icon: 'medkit' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
