import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean;
  logchanged: Subject<any>;
  constructor() {
    this.isLoggedIn = false;
    this.logchanged = new Subject();
  }

  isAuth(): boolean {
    return this.isLoggedIn;
  }
  login(): boolean {
    this.isLoggedIn = true;
    this.logchanged.next(this.isLoggedIn);
    return this.isLoggedIn;
  }
  logout(): boolean {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
