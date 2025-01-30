import { Subject } from "rxjs";
import { User } from "../models/user.model";

export class UserService {
  users = [
    new User("John", "Doe", "M", "example@gmail.com", "SomethingSomething", new Date("01/01/1970"), "612345678", "France", "Something, Something, Darkside", "1", "#000000", "somePath/to/an/image", "50", false)
  ];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    const newUser = new User(
      user.firstName,
      user.lastName,
      user.gender,
      user.email,
      user.password,
      user.birthday,
      user.telephone,
      user.country,
      user.bio,
      user.favoriteNumber,
      user.favoriteColor,
      user.avatarImagePath,
      user.agreementLevel,
      user.getsNewsletter
    );
    this.users.push(newUser);
    this.emitUsers();
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  searchUsersByEmail(emailPrefix: string) {
    return this.users.filter((user: User) => user.email.toLowerCase().startsWith(emailPrefix.toLowerCase()));
  }
}