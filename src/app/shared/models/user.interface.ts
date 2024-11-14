// shared/models/user.interface.ts
export interface User {
    address: any;
    id: string;
    email: string;
    name: string;
    phone?: string;
    role: 'user' | 'admin';
  }
  
  // services/auth.service.ts
  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser$ = this.currentUserSubject.asObservable();
  
    constructor() {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
    }
  
    login(email: string, password: string): Promise<User> {
      // Implement actual API call here
      return new Promise((resolve, reject) => {
        // Mock login
        const mockUser: User = {
          id: '1',
          email,
          name: 'John Doe',
          role: 'user',
          address: undefined
        };
        localStorage.setItem('currentUser', JSON.stringify(mockUser));
        this.currentUserSubject.next(mockUser);
        resolve(mockUser);
      });
    }
  
    logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
  
    isAuthenticated(): boolean {
      return this.currentUserSubject.value !== null;
    }
  
    isAdmin(): boolean {
      return this.currentUserSubject.value?.role === 'admin';
    }
  }