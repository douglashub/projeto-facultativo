import { Injectable } from '@angular/core';
import { UserLoginModel } from 'src/app/pages/auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(user: UserLoginModel): void {
    this.storeObject('user', user);
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }

    return false;
  }

  storeObject(itemName: string, item: any): void {
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  getObject(itemName: string): any {
    return JSON.parse(localStorage.getItem(itemName));
  }
}
