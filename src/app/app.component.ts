import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app7';
  users: any;
  constructor(private userdata: UsersdataService) {
    this.userdata.users().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
  }
  getUserFormData(data: any) {
    this.userdata.SaveUsers(data).subscribe((result) => {
      console.warn(result);
    });
  }
}
