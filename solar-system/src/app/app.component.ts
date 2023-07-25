import { Component } from '@angular/core';
import { IonicRestService } from './ionic-rest.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private ionicRestService: IonicRestService) {}
  ngOnInit(): void {
    this.ionicRestService.getPlanetList().subscribe((data) => {
      console.log(data);
    });
  }
}