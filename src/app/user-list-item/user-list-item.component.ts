import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user: User;
  usersSubscription: Subscription;
  expanded: boolean = false; // Bio initially collapsed

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.userSubject.subscribe(
      (users) => { }
    );

    this.userService.emitUsers();
  }

  navigateToUserProfile() {
    if (this.user && this.user.id) {
      this.router.navigate(['/users', this.user.id]); // ✅ Navigate to profile
    } else {
      console.error("User ID is missing, cannot navigate!");
    }
  }
}
