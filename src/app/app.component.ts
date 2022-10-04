import { Component } from '@angular/core';
import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-express';
  status = 'DOWN';

  constructor(private statusService: StatusService){}

  ngOnInit() {
    this.statusService
      .getStatus()
      .then((results: any) => {
        this.status = results.status;
      });
  }
}
